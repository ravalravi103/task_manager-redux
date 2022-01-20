import axios from "axios";

export const getAllTaskAPI = async () => {
  try {
    const response = axios.get("http://localhost:3000/tasks");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSingleTaskAPI = (id: any) => {};

export const updateTaskAPI = (id: any) => {};

export const deleteTaskAPI = (id: any) => {};

export const AddTaskAPI = (task: Task) => {};
