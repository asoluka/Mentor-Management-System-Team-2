import Image from "next/image";

export const iconPaths = {
  Notification: ({ color = "#F7FEFF", width = "26", height = "27" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 10.8225V9.5C5 5.08172 8.58172 1.5 13 1.5C17.4183 1.5 21 5.08171 21 9.5V10.8225C21 13.6979 21.8311 16.512 23.3932 18.9261L24.25 20.25H1.75L2.60674 18.926C4.1689 16.512 5 13.6979 5 10.8225Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.75 25.1113C12.418 25.8536 13.582 25.8536 14.25 25.1113"
          stroke="#F7FEFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Chat: ({ color = "#F7FEFF", width = "26", height = "25" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.75 1.75H4.25C2.86929 1.75 1.75 2.86929 1.75 4.25V16.75C1.75 18.1307 2.86929 19.25 4.25 19.25H8L12.558 23.808C12.8021 24.0521 13.1979 24.0521 13.442 23.808L18 19.25H21.75C23.1307 19.25 24.25 18.1307 24.25 16.75V4.25C24.25 2.86929 23.1307 1.75 21.75 1.75Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Search: ({ color = "#808080", width = "22", height = "22" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 16L21 21M18.5 9.75C18.5 14.5825 14.5825 18.5 9.75 18.5C4.91751 18.5 1 14.5825 1 9.75C1 4.91751 4.91751 1 9.75 1C14.5825 1 18.5 4.91751 18.5 9.75Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Profile: () => {
    return (
      <Image
        width={16}
        height={16}
        src={"/assets/images/profile.svg"}
        alt="profile-icon"
      />
    );
  },
  Dashboard: () => {
    return (
      <Image
        width={16}
        height={16}
        src={"/assets/images/dashboard.svg"}
        alt="dashboard-icon"
      />
    );
  },
  Program: () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 1H2C1.44772 1 1 1.44772 1 2V9C1 9.55229 1.44772 10 2 10H9C9.55229 10 10 9.55229 10 9V2C10 1.44772 9.55229 1 9 1Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 14H14.5C14.2239 14 14 14.2239 14 14.5V18.5C14 18.7761 14.2239 19 14.5 19H18.5C18.7761 19 19 18.7761 19 18.5V14.5C19 14.2239 18.7761 14 18.5 14Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 5H14.5C14.2239 5 14 5.22386 14 5.5V9.5C14 9.77614 14.2239 10 14.5 10H18.5C18.7761 10 19 9.77614 19 9.5V5.5C19 5.22386 18.7761 5 18.5 5Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 14H5.5C5.22386 14 5 14.2239 5 14.5V18.5C5 18.7761 5.22386 19 5.5 19H9.5C9.77614 19 10 18.7761 10 18.5V14.5C10 14.2239 9.77614 14 9.5 14Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Task: ({ color = "#808080", width = "16", height = "16" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.29561 12.0657H8.11214L8.93711 12.9142L9.84437 13.8474C9.94683 13.9611 9.99561 14.0868 9.99561 14.2488C9.99561 14.4116 9.94663 14.5206 9.8551 14.6121C9.76673 14.7005 9.65481 14.7526 9.47822 14.7526C9.30163 14.7526 9.18971 14.7005 9.10134 14.6121L6.38829 11.8991C6.29992 11.8107 6.24778 11.6988 6.24778 11.5222C6.24778 11.3456 6.29992 11.2337 6.38829 11.1453L9.10134 8.43228C9.18971 8.34391 9.30163 8.29177 9.47822 8.29177C9.65481 8.29177 9.76673 8.34391 9.8551 8.43228C9.97652 8.5537 10.0299 8.68124 10.0344 8.83624L10.0345 8.83741C10.039 8.98172 9.99634 9.07985 9.89688 9.17102L9.88887 9.17836L9.88119 9.18604L8.94206 10.1252L8.0885 10.9787H9.29561H12.6087C12.7783 10.9787 12.8972 11.0305 12.9991 11.1318C13.1003 11.2336 13.1521 11.3525 13.1521 11.5222C13.1521 11.6922 13.1002 11.8105 12.9991 11.9116C12.897 12.0137 12.7781 12.0657 12.6087 12.0657H9.29561ZM1.67387 18.8266V19.3266H2.17387H16.7826H17.2826V18.8266V4.21786V3.71786H16.7826H10.2111C10.275 3.6742 10.3359 3.62381 10.3932 3.56654C10.6428 3.31695 10.7608 2.99905 10.7608 2.65264C10.7608 2.30623 10.6428 1.9885 10.394 1.73853L10.3923 1.73687C10.1424 1.48807 9.82463 1.37003 9.47822 1.37003C9.13181 1.37003 8.81391 1.4881 8.56432 1.7377C8.31451 1.98751 8.19561 2.30551 8.19561 2.65264C8.19561 2.999 8.31402 3.31653 8.56349 3.56571C8.62084 3.62334 8.68183 3.674 8.74598 3.71786H2.17387H1.67387V4.21786V18.8266ZM6.55648 2.6309H6.90753L7.02676 2.30072C7.21927 1.7676 7.53657 1.34611 7.98416 1.02346L7.98441 1.02328C8.42832 0.702875 8.92118 0.543945 9.47822 0.543945C10.0352 0.543945 10.5284 0.702823 10.9731 1.02328C11.42 1.34588 11.7371 1.76742 11.9297 2.30072L12.0489 2.6309H12.4H16.7826C17.2227 2.6309 17.5873 2.7816 17.9032 3.09675C18.2187 3.41278 18.3695 3.77749 18.3695 4.21786V18.8266C18.3695 19.2668 18.2188 19.6315 17.9034 19.9474C17.5875 20.2627 17.2228 20.4135 16.7826 20.4135H2.17387C1.73351 20.4135 1.3688 20.2627 1.05277 19.9472C0.737612 19.6313 0.586914 19.2667 0.586914 18.8266V4.21786C0.586914 3.7776 0.737684 3.41296 1.05299 3.09698C1.36897 2.78167 1.73361 2.6309 2.17387 2.6309H6.55648Z"
          fill="#808080"
          stroke={color}
        />
      </svg>
    );
  },
  Report: ({ color = "#808080", width = "16", height = "16" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 5H13M5 9H13M5 13H8M3 21H15C16.1046 21 17 20.1046 17 19V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Location: ({ color = "#058B94", width = "24", height = "28" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.54049 18.1091L12 26.5L19.4595 18.1091C25.1807 11.6735 20.6116 1.5 12 1.5C3.38835 1.5 -1.18077 11.6735 4.54049 18.1091Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.25C14.0711 15.25 15.75 13.5711 15.75 11.5C15.75 9.42893 14.0711 7.75 12 7.75C9.92893 7.75 8.25 9.42893 8.25 11.5C8.25 13.5711 9.92893 15.25 12 15.25Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Person: ({ color = "#808080", width = "16", height = "16" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 19V15C1 13.8954 1.89543 13 3 13H15C16.1046 13 17 13.8954 17 15V19"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  People: ({ color = "#808080", width = "16", height = "16" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 19V15C1 13.8954 1.89543 13 3 13H13C14.1046 13 15 13.8954 15 15V19"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 1C15.8604 1.2203 16.623 1.7207 17.1676 2.42231C17.7122 3.12392 18.0078 3.98683 18.0078 4.875C18.0078 5.76317 17.7122 6.62608 17.1676 7.32769C16.623 8.0293 15.8604 8.5297 15 8.75"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 13H19C20.1046 13 21 13.8954 21 15V19"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Message: () => {
    return (
      <Image
        width={16}
        height={16}
        src={"/assets/images/messages.svg"}
        alt="messages-icon"
      />
    );
  },
  Settings: () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.0761 2.16311C9.136 1.50438 9.6883 1 10.3497 1H11.6503C12.3117 1 12.864 1.50438 12.9239 2.16311C12.9731 2.70392 13.3623 3.14543 13.8708 3.336C14.0015 3.38499 14.1307 3.43724 14.2582 3.49263C14.7613 3.71129 15.3531 3.66938 15.7745 3.31818C16.2953 2.8842 17.0611 2.91894 17.5404 3.39829L18.4584 4.31623C18.9154 4.77326 18.9485 5.50338 18.5347 5.99992C18.1901 6.41349 18.158 6.99745 18.3897 7.48341C18.49 7.69386 18.5816 7.90926 18.664 8.12916C18.8546 8.63767 19.2961 9.0269 19.8369 9.0761C20.4956 9.136 21 9.6883 21 10.3497V11.6503C21 12.3117 20.4956 12.864 19.8369 12.9239C19.2961 12.9731 18.8546 13.3623 18.664 13.8708C18.59 14.0682 18.5086 14.262 18.4202 14.4518C18.2053 14.913 18.2401 15.4637 18.5658 15.8546C18.962 16.33 18.9303 17.0291 18.4927 17.4667L17.4667 18.4927C17.0291 18.9303 16.33 18.962 15.8546 18.5658C15.4637 18.2401 14.913 18.2053 14.4518 18.4202C14.262 18.5086 14.0682 18.59 13.8708 18.664C13.3623 18.8546 12.9731 19.2961 12.9239 19.8369C12.864 20.4956 12.3117 21 11.6503 21H10.3497C9.6883 21 9.136 20.4956 9.0761 19.8369C9.0269 19.2961 8.63767 18.8546 8.12917 18.664C7.90927 18.5816 7.69387 18.49 7.48343 18.3897C6.99746 18.158 6.4135 18.1901 5.99992 18.5347C5.50338 18.9485 4.77325 18.9154 4.31622 18.4584L3.39829 17.5404C2.91893 17.0611 2.8842 16.2953 3.31818 15.7745C3.66939 15.3531 3.71129 14.7613 3.49263 14.2582C3.43724 14.1307 3.385 14.0016 3.336 13.8708C3.14544 13.3623 2.70392 12.9731 2.16311 12.9239C1.50438 12.864 1 12.3117 1 11.6503V10.3497C1 9.6883 1.50438 9.136 2.16311 9.0761C2.70393 9.0269 3.14544 8.63768 3.33601 8.12917C3.3936 7.9755 3.45568 7.82402 3.52209 7.67489C3.7571 7.14716 3.71804 6.52257 3.34821 6.07877C2.89722 5.53758 2.93332 4.74179 3.43145 4.24365L4.24364 3.43146C4.74178 2.93332 5.53757 2.89722 6.07876 3.34822C6.52256 3.71805 7.14715 3.7571 7.67488 3.52209C7.82401 3.45568 7.97549 3.3936 8.12916 3.33601C8.63767 3.14544 9.0269 2.70393 9.0761 2.16311Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11C14 12.6569 12.6569 14 11 14C9.3431 14 8 12.6569 8 11C8 9.3431 9.3431 8 11 8C12.6569 8 14 9.3431 14 11Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  ApprovalRequest: () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 6V16M6 11H16"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Certificate: () => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.00025 11.9998L11.0002 13.9998L15.0002 9.99975M7.9466 4.24947L6.25219 4.23679C5.13594 4.22843 4.22892 5.13545 4.23728 6.2517L4.24996 7.94611C4.25401 8.48691 4.03887 9.0063 3.6536 9.38584L2.44651 10.5751C1.65129 11.3585 1.65129 12.6412 2.44651 13.4246L3.6536 14.6137C4.03887 14.9933 4.25401 15.5127 4.24996 16.0535L4.23728 17.7479C4.22892 18.8641 5.13594 19.7711 6.25219 19.7628L7.9466 19.7501C8.4874 19.7461 9.00679 19.9612 9.38633 20.3465L10.5755 21.5536C11.3589 22.3488 12.6416 22.3488 13.425 21.5536L14.6141 20.3465C14.9937 19.9612 15.5131 19.7461 16.0539 19.7501L17.7483 19.7628C18.8645 19.7711 19.7715 18.8641 19.7632 17.7479L19.7505 16.0535C19.7465 15.5127 19.9616 14.9933 20.3469 14.6137L21.554 13.4246C22.3492 12.6412 22.3492 11.3585 21.554 10.5751L20.3469 9.38584C19.9616 9.0063 19.7465 8.48691 19.7505 7.94611L19.7632 6.2517C19.7715 5.13545 18.8645 4.22843 17.7483 4.23679L16.0539 4.24947C15.5131 4.25352 14.9937 4.03838 14.6141 3.65311L13.425 2.44602C12.6416 1.6508 11.3588 1.6508 10.5755 2.44602L9.38633 3.65311C9.00679 4.03838 8.4874 4.25352 7.9466 4.24947Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  DiscussionForum: () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 5H15"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 9H9"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 3V18.7929C1 19.2383 1.53857 19.4614 1.85355 19.1464L5.70711 15.2929C5.89464 15.1054 6.149 15 6.41421 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  Emoji: () => {
    return (
      <svg
        className="inline"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.0161 9.0161L14 9M8.01611 9.0161L8 9M7 14C7 14 7.12514 14.2503 7.4197 14.5738C7.9578 15.1647 9.0613 16 11 16C12.9387 16 14.0422 15.1647 14.5803 14.5738C14.8749 14.2503 15 14 15 14M11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21Z"
          stroke="black"
        />
      </svg>
    );
  },
  Location: ({ color = "#058B94", width = "24", height = "28" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.54049 18.1091L12 26.5L19.4595 18.1091C25.1807 11.6735 20.6116 1.5 12 1.5C3.38835 1.5 -1.18077 11.6735 4.54049 18.1091Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.25C14.0711 15.25 15.75 13.5711 15.75 11.5C15.75 9.42893 14.0711 7.75 12 7.75C9.92893 7.75 8.25 9.42893 8.25 11.5C8.25 13.5711 9.92893 15.25 12 15.25Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Calendar: ({ color = "#058B94", width = "24", height = "28" }) => {
    return (
      <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.99935 10.667C9.16417 10.667 9.32528 10.6181 9.46232 10.5266C9.59937 10.435 9.70618 10.3048 9.76925 10.1526C9.83232 10.0003 9.84882 9.83273 9.81667 9.67108C9.78452 9.50943 9.70515 9.36095 9.5886 9.2444C9.47206 9.12786 9.32358 9.04849 9.16192 9.01634C9.00027 8.98418 8.83272 9.00069 8.68045 9.06376C8.52817 9.12683 8.39803 9.23364 8.30646 9.37068C8.21489 9.50772 8.16602 9.66884 8.16602 9.83366C8.16602 10.0547 8.25381 10.2666 8.41009 10.4229C8.56637 10.5792 8.77833 10.667 8.99935 10.667ZM13.166 10.667C13.3308 10.667 13.492 10.6181 13.629 10.5266C13.766 10.435 13.8728 10.3048 13.9359 10.1526C13.999 10.0003 14.0155 9.83273 13.9833 9.67108C13.9512 9.50943 13.8718 9.36095 13.7553 9.2444C13.6387 9.12786 13.4902 9.04849 13.3286 9.01634C13.1669 8.98418 12.9994 9.00069 12.8471 9.06376C12.6948 9.12683 12.5647 9.23364 12.4731 9.37068C12.3816 9.50772 12.3327 9.66884 12.3327 9.83366C12.3327 10.0547 12.4205 10.2666 12.5768 10.4229C12.733 10.5792 12.945 10.667 13.166 10.667ZM8.99935 14.0003C9.16417 14.0003 9.32528 13.9515 9.46232 13.8599C9.59937 13.7683 9.70618 13.6382 9.76925 13.4859C9.83232 13.3336 9.84882 13.1661 9.81667 13.0044C9.78452 12.8428 9.70515 12.6943 9.5886 12.5777C9.47206 12.4612 9.32358 12.3818 9.16192 12.3497C9.00027 12.3175 8.83272 12.334 8.68045 12.3971C8.52817 12.4602 8.39803 12.567 8.30646 12.704C8.21489 12.8411 8.16602 13.0022 8.16602 13.167C8.16602 13.388 8.25381 13.6 8.41009 13.7562C8.56637 13.9125 8.77833 14.0003 8.99935 14.0003ZM13.166 14.0003C13.3308 14.0003 13.492 13.9515 13.629 13.8599C13.766 13.7683 13.8728 13.6382 13.9359 13.4859C13.999 13.3336 14.0155 13.1661 13.9833 13.0044C13.9512 12.8428 13.8718 12.6943 13.7553 12.5777C13.6387 12.4612 13.4902 12.3818 13.3286 12.3497C13.1669 12.3175 12.9994 12.334 12.8471 12.3971C12.6948 12.4602 12.5647 12.567 12.4731 12.704C12.3816 12.8411 12.3327 13.0022 12.3327 13.167C12.3327 13.388 12.4205 13.6 12.5768 13.7562C12.733 13.9125 12.945 14.0003 13.166 14.0003ZM4.83268 10.667C4.9975 10.667 5.15862 10.6181 5.29566 10.5266C5.4327 10.435 5.53951 10.3048 5.60258 10.1526C5.66565 10.0003 5.68216 9.83273 5.65 9.67108C5.61785 9.50943 5.53848 9.36095 5.42194 9.2444C5.30539 9.12786 5.15691 9.04849 4.99526 9.01634C4.83361 8.98418 4.66605 9.00069 4.51378 9.06376C4.36151 9.12683 4.23136 9.23364 4.13979 9.37068C4.04822 9.50772 3.99935 9.66884 3.99935 9.83366C3.99935 10.0547 4.08715 10.2666 4.24343 10.4229C4.39971 10.5792 4.61167 10.667 4.83268 10.667ZM14.8327 2.33366H13.9993V1.50033C13.9993 1.27931 13.9116 1.06735 13.7553 0.91107C13.599 0.75479 13.387 0.666992 13.166 0.666992C12.945 0.666992 12.733 0.75479 12.5768 0.91107C12.4205 1.06735 12.3327 1.27931 12.3327 1.50033V2.33366H5.66602V1.50033C5.66602 1.27931 5.57822 1.06735 5.42194 0.91107C5.26566 0.75479 5.0537 0.666992 4.83268 0.666992C4.61167 0.666992 4.39971 0.75479 4.24343 0.91107C4.08715 1.06735 3.99935 1.27931 3.99935 1.50033V2.33366H3.16602C2.50297 2.33366 1.86709 2.59705 1.39825 3.06589C0.929408 3.53473 0.666016 4.17062 0.666016 4.83366V14.8337C0.666016 15.4967 0.929408 16.1326 1.39825 16.6014C1.86709 17.0703 2.50297 17.3337 3.16602 17.3337H14.8327C15.4957 17.3337 16.1316 17.0703 16.6004 16.6014C17.0693 16.1326 17.3327 15.4967 17.3327 14.8337V4.83366C17.3327 4.17062 17.0693 3.53473 16.6004 3.06589C16.1316 2.59705 15.4957 2.33366 14.8327 2.33366ZM15.666 14.8337C15.666 15.0547 15.5782 15.2666 15.4219 15.4229C15.2657 15.5792 15.0537 15.667 14.8327 15.667H3.16602C2.945 15.667 2.73304 15.5792 2.57676 15.4229C2.42048 15.2666 2.33268 15.0547 2.33268 14.8337V7.33366H15.666V14.8337ZM15.666 5.66699H2.33268V4.83366C2.33268 4.61264 2.42048 4.40068 2.57676 4.2444C2.73304 4.08812 2.945 4.00033 3.16602 4.00033H14.8327C15.0537 4.00033 15.2657 4.08812 15.4219 4.2444C15.5782 4.40068 15.666 4.61264 15.666 4.83366V5.66699ZM4.83268 14.0003C4.9975 14.0003 5.15862 13.9515 5.29566 13.8599C5.4327 13.7683 5.53951 13.6382 5.60258 13.4859C5.66565 13.3336 5.68216 13.1661 5.65 13.0044C5.61785 12.8428 5.53848 12.6943 5.42194 12.5777C5.30539 12.4612 5.15691 12.3818 4.99526 12.3497C4.83361 12.3175 4.66605 12.334 4.51378 12.3971C4.36151 12.4602 4.23136 12.567 4.13979 12.704C4.04822 12.8411 3.99935 13.0022 3.99935 13.167C3.99935 13.388 4.08715 13.6 4.24343 13.7562C4.39971 13.9125 4.61167 14.0003 4.83268 14.0003Z"
          fill={color}
        />
      </svg>

    );
  },
  Globe: ({ color = "#058B94", width = "24", height = "28" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12H22"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2.2019C14.4744 4.72698 16 8.18526 16 11.9999C16 15.8145 14.4744 19.2728 12 21.7978"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2.2019C9.52563 4.72698 8 8.18526 8 11.9999C8 15.8145 9.52563 19.2728 12 21.7978"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  Attachment: () => {
    return (
      <svg
        className="inline"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 9.0265L10.8445 17.289C8.5925 19.5707 4.94113 19.5707 2.68905 17.289C0.436983 15.0074 0.436983 11.3081 2.68905 9.0265L9.4853 2.14106C10.9867 0.619972 13.4209 0.619972 14.9223 2.14106C16.4236 3.66215 16.4236 6.12832 14.9223 7.64941L8.126 14.5348C7.37535 15.2954 6.15824 15.2954 5.40754 14.5348C4.65685 13.7743 4.65685 12.5412 5.40754 11.7807L12.2038 4.89524"
          stroke="black"
        />
      </svg>
    );
  },
  Mail: ({ color = "#058B94", width = "24", height = "28" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 5.5L12 13L4 5.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Pin: ({ color = "#808080", width = "20", height = "20" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 9.52626L10.8445 17.7888C8.5925 20.0705 4.94113 20.0705 2.68905 17.7888C0.436983 15.5072 0.436983 11.8079 2.68905 9.52626L9.4853 2.64082C10.9867 1.11973 13.4209 1.11973 14.9223 2.64082C16.4236 4.16191 16.4236 6.62808 14.9223 8.14917L8.126 15.0346C7.37535 15.7952 6.15824 15.7952 5.40754 15.0346C4.65685 14.2741 4.65685 13.041 5.40754 12.2805L12.2038 5.395"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  MessageIcon: ({ color = "#058B94", width = "24", height = "28" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 13.663 2.04094 16.0829 3.73812 17.875L1.72681 20.1705C1.44361 20.4937 1.67314 21 2.10288 21H11Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  PlusIcon: ({ color = "#058B94", width = "22", height = "22" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6V16ZM6 11H16Z" fill={color} />
        <path
          d="M11 6V16M6 11H16"
          stroke="#058B94"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Close: ({ color = "#058B94", width = "18", height = "18" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z"
          fill={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  SmileyFace: ({ color = "#058B94", width = "25", height = "25" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.6424 10.4331L15.6257 10.4163M9.39243 10.4331L9.37565 10.4163M8.33398 15.6247C8.33398 15.6247 8.46434 15.8854 8.77117 16.2224C9.33169 16.8379 10.4812 17.708 12.5007 17.708C14.5201 17.708 15.6696 16.8379 16.2301 16.2224C16.537 15.8854 16.6673 15.6247 16.6673 15.6247M12.5007 22.9163C6.74768 22.9163 2.08398 18.2526 2.08398 12.4997C2.08398 6.74671 6.74768 2.08301 12.5007 2.08301C18.2536 2.08301 22.9173 6.74671 22.9173 12.4997C22.9173 18.2526 18.2536 22.9163 12.5007 22.9163Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  Comment: ({ color = "#058B94", width = "20", height = "20" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9997_21882)">
          <path
            d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39697 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 12.2195 2.53347 14.2361 3.94778 15.7295L2.27169 17.6424C2.03569 17.9117 2.22697 18.3337 2.58508 18.3337H9.99935Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83398 7.5H14.1673"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83398 10.833H9.16732"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_9997_21882">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  BookMark: ({ color = "#058B94", width = "20", height = "20" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.16602 18.3337V2.50033C4.16602 2.04009 4.53912 1.66699 4.99935 1.66699H14.9993C15.4596 1.66699 15.8327 2.04009 15.8327 2.50033V18.3337L9.99935 13.2411L4.16602 18.3337Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  Share: ({ color = "#058B94", width = "20", height = "20" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.166 1.66699H18.3327V5.83366"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 10.8333V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H9.16667"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.834 9.16634L17.9173 2.08301"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Clock: ({ color = "#058B94", width = "20", height = "20" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V12L16 16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Horizon: ({ color = "#058B94", width = "24", height = "24" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Logout: ({ width="20", height="20", color="#808080"}) => {
    return (
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10H13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 5L1 10L6 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 1V19" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    );
  },
  PlusOutLined: ({ width="20", height="20", color="#058B94" }) => {
    return (
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99967 5.83301V14.1663M5.83301 9.99967H14.1663" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },
  Check: ({ width="18", height="12", color="#058B94" }) => {
    return (
      <svg width={width} height={height} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 6L6.5 11L16.5 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },
};
