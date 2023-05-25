import http from "services/axios";
import { apiService } from "../../api/axios";
import { toast } from "react-hot-toast";

export const fetchPrograms = async () => {
  const response = await http.get("/programs");
  return response.data;
};

export const getUserProgram = async (id, query) => {
  const response = await http.get(`/programs/user-programs/${id}` + query);
  return response.data;
};

export const createProgram = async (data) => {
  try {
    const response = await apiService("/programs", "POST", data);
    return response.data;
  } catch (e) {
    toast.error("An error occured while fetching reports", {
      toastId: "network-error-toast",
    });
  }
};
