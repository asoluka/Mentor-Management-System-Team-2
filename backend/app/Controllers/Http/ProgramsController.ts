import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Roles from 'App/Enums/Roles'
import Program from 'App/Models/Program'
import ProgramReport from 'App/Models/ProgramReport'
import UserProgram from 'App/Models/UserProgram'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ProgramsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { page, limit, search } = request.qs()
      const programs = await Program.query()
        .where('is_archive', false)
        .andWhereRaw('LOWER(name) LIKE ?', [`%${search?.toLowerCase() || ''}%`])
        .orderBy('id', 'desc')
        .preload('programReports')
        .preload('userPrograms', (query) => {
          ;(async () => await query.preload('user'))()
        })
        .paginate(page || 1, limit || 10)

      const { data } = programs.toJSON()

      const structuredPrograms = this.structurePrograms(data)

      response.ok(structuredPrograms)
    } catch (error) {
      response.badRequest({ message: `server issue`, status: error })
    }
  }

  public async store({ auth, request, response }: HttpContextContract) {
    try {
      if (auth.user?.id) {
        const userId = auth.user?.id
        const payload = await request.validate({
          schema: schema.create({
            gravatar: schema.file.optional({
              size: '2mb',
              extnames: ['jpg', 'png'],
            }),
            name: schema.string(),
            description: schema.string.optional(),
            mentors: schema.array().members(schema.number()),
            mentorManagers: schema.array().members(schema.number()),
          }),
        })

        const program = new Program()
        program.userId = userId
        program.name = payload.name
        program.description = payload.description ?? ''

        if (payload.gravatar) {
          const gravatar = request.file('gravatar')
          await gravatar?.moveToDisk('upload_file')
          program.gravatar = gravatar?.fileName ?? ''
        }

        await program.save()
        const { mentors, mentorManagers } = payload
        const users = [...mentors, ...mentorManagers]

        if (users && users.length > 0) {
          const usersData = users.map((userId) => ({
            programId: program.id,
            userId,
          }))

          await UserProgram.createMany(usersData)
        }
        response.created({ message: 'Program created', ...program.$attributes })
      }
    } catch (error) {
      response.badRequest({ message: `server issue`, status: 'Error' })
    }
  }

  public async show({ auth, params, response }: HttpContextContract) {
    try {
      const user = auth.user
      if (!user || !user.isAdmin) {
        return response.unauthorized({ error: 'You must be an admin to view program reports' })
      }

      const { id } = params

      const program = await Program.query().where('id', id).firstOrFail()
      const reports = await ProgramReport.query().where('program_id', id).exec()
      const mentors = await UserProgram.query()
        .where('program_id', id)
        .whereHas('user', (query) => {
          query.where('role_id', Roles.MENTOR)
        })
        .preload('user')
        .exec()
      const mentorManagers = await UserProgram.query()
        .where('program_id', id)
        .whereHas('user', (query) => {
          query.where('role_id', Roles.MENTOR_MANAGER)
        })
        .preload('user')
        .exec()

      return response.ok({
        program,
        reportCount: reports.length,
        reports,
        mentorCount: mentors.length,
        mentors,
        mentorManagerCount: mentorManagers.length,
        mentorManagers,
      })
    } catch (error) {
      return response.badRequest({ message: 'Server issue', status: 'Error' })
    }
  }

  public async update({ auth, params, request, response }: HttpContextContract) {
    try {
      const userId = await auth.user?.id
      const program = await Program.findByOrFail('id', params.id)
      const payload = await request.validate({
        schema: schema.create({
          gravatar: schema.file.optional({
            size: '2mb',
            extnames: ['jpg', 'png'],
          }),
          name: schema.string(),
          description: schema.string.optional(),
          mentors: schema.array().members(schema.number()),
          mentorManagers: schema.array().members(schema.number()),
        }),
      })

      if (!program) return response.status(404).send({ message: 'Program not Found' })

      program.userId = userId ?? program.userId
        program.name = payload.name ?? program.name
        program.description = payload.description ?? program.description

        if (payload.gravatar) {
          const gravatar = request.file('gravatar')
          await gravatar?.moveToDisk('upload_file')
          program.gravatar = gravatar?.fileName ?? program.gravatar
        }
      await program.save()

      await UserProgram.query().where('programId', program.id).delete()

      const { mentors, mentorManagers } = payload
      const users = [...mentors, ...mentorManagers]

      if (users && users.length > 0) {
        const usersData = users.map((userId) => ({
          programId: program.id,
          userId,
        }))

        await UserProgram.createMany(usersData)
      }

      response.status(200).json({ message: 'Program updated', ...program.$attributes })
    } catch (error) {
      response.badRequest({ message: `server issue`, status: 'Error' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const program = await Program.findOrFail(params.id)
    if (!program) return response.status(404).send({ message: 'Program not found' })

    await program.delete()
    response.status(204)
  }

  public async archive({ params, response }) {
    const program = await Program.findOrFail(params.id)

    if (!program) return response.status(404).send({ message: 'Program not found' })

    program.isArchive = true

    await program.save()

    response.status(200).send({ message: 'Program archived successfully' })
  }

  public async allArchive({ request, response }: HttpContextContract) {
    try {
      const { page, limit, search } = request.qs()
      const programs = await Program.query()
        .where('is_archive', true)
        .andWhereRaw('name like ?', [`%${search || ''}%`])
        .orderBy('id', 'desc')
        .paginate(page || 1, limit || 10)

      response.ok(programs)
    } catch (error) {
      response.badRequest({ message: `server issue`, status: 'Error' })
    }
  }

  public async assignUser({ auth, request, response }: HttpContextContract) {
    const user = auth.user
    if (!user || !user.isAdmin) {
      response.unauthorized({ message: 'You are not authorized to access this resource.' })
      return
    }
    try {
      const { userId, programId } = request.only(['userId', 'programId'])
      const user = await UserProgram.query()
        .where('user_id', userId)
        .andWhere('program_id', programId)
        .first()

      if (user) {
        return response.status(404).send({ message: 'User already assigned to this program' })
      }

      const userProgram = new UserProgram()
      userProgram.fill({ userId, programId })
      userProgram.save()
      response.created({ message: 'User assigned' })
    } catch (error) {
      response.badRequest({ message: `server issue ${error}`, status: 'Error' })
    }
  }

  public async unassignUser({ auth, request, response }: HttpContextContract) {
    const user = auth.user
    if (!user || !user.isAdmin) {
      response.unauthorized({ message: 'You are not authorized to access this resource.' })
      return
    }
    const { userId, programId } = request.only(['userId', 'programId'])
    const userProgram = await UserProgram.query()
      .where('user_id', userId)
      .andWhere('program_id', programId)
      .first()

    if (!userProgram)
      return response.status(404).send({ message: 'User not assigned to this program' })

    await userProgram.delete()
    response.status(204)
  }

  public async userPrograms({ auth, request, response, params }: HttpContextContract) {
    const user = auth.user
    if (!user || !user.isAdmin) {
      response.unauthorized({ message: 'You are not authorized to access this resource.' })
      return
    }
    try {
      const { page, limit, search } = request.qs()
      const userPrograms = await UserProgram.query()
        .preload('user')
        .preload('program', (query) => {
          query
            .whereHas('userPrograms', (q) => {
              q.where('user_id', params.id)
            })
            .where('is_archive', false)
            .andWhereRaw('LOWER(name) LIKE ?', [`%${search?.toLowerCase() || ''}%`])
            .orderBy('id', 'desc')
            .preload('programReports')
        })
        .where('user_id', params.id)
        .paginate(page || 1, limit || 10)

      const { data } = userPrograms.toJSON()
      const structuredUserPrograms = this.structureUserPrograms(data)

      response.ok(structuredUserPrograms)
    } catch (error) {
      response.badRequest({ message: `server issue`, status: error })
    }
  }

  public async programMentor({ auth, params, request, response }: HttpContextContract) {
    const user = auth.user
    if (!user || !user.isAdmin) {
      response.unauthorized({ message: 'You are not authorized to access this resource.' })
      return
    }
    const program = await Program.query().where('id', params.id).firstOrFail()
    const { page, limit } = request.qs()
    const users = await UserProgram.query()
      .whereHas('user', (query) => {
        query.where('role_id', Roles.MENTOR)
      })
      .where('program_id', params.id)
      .preload('user')
      .paginate(page || 1, limit || 10)

    if (!program) return response.status(404).send({ message: 'Program not found' })

    program.users = users

    return response.ok(program)
  }

  public async programMentorManager({ auth, params, request, response }: HttpContextContract) {
    const user = auth.user
    if (!user || !user.isAdmin) {
      response.unauthorized({ message: 'You are not authorized to access this resource.' })
      return
    }
    const program = await Program.query().where('id', params.id).firstOrFail()
    const { page, limit } = request.qs()
    const users = await UserProgram.query()
      .whereHas('user', (query) => {
        query.where('role_id', Roles.MENTOR_MANAGER)
      })
      .where('program_id', params.id)
      .preload('user')
      .paginate(page || 1, limit || 10)

    if (!program) return response.status(404).send({ message: 'Program not found' })

    program.users = users

    return response.ok(program)
  }

  private structurePrograms(programs) {
    const structured = programs.map((program) => {
      const result: {
        id: number
        user_id: number
        name: string
        description: string
        is_archive: boolean
        created_at: string
        updated_at: string
        programReportsCount: number
        mentorCount: number
        mentorManagerCount: number
        programReports: any[]
        mentor: any[]
        mentorManager: any[]
      } = {
        id: program.id,
        user_id: program.user_id,
        name: program.name,
        description: program.description,
        is_archive: program.is_archive,
        created_at: program.created_at,
        updated_at: program.updated_at,
        programReportsCount: program.programReports.length,
        mentorCount: 0,
        mentorManagerCount: 0,
        programReports: program.programReports,
        mentor: [],
        mentorManager: [],
      }

      program.userPrograms.forEach((programUser) => {
        const { user } = programUser
        if (user.roleId === Roles.MENTOR) {
          result.mentor.push(user)
        }
        if (user.roleId === Roles.MENTOR_MANAGER) {
          result.mentorManager.push(user)
        }
      })

      result.mentorCount = result.mentor.length
      result.mentorManagerCount = result.mentorManager.length

      return result
    })

    return structured
  }

  private structureUserPrograms(userPrograms) {
    if (userPrograms.length > 0) {
      const { user } = userPrograms[0]
      const programs = userPrograms
        .map((user) => {
          const { program } = user
          if (program) {
            const programReportsCount = program.programReports.length
            const programWithCount = {
              ...program.toJSON(),
              programReportsCount,
            }
            return programWithCount
          }
          return null
        })
        .filter(Boolean)
      return { user, programs }
    }
  }
}
