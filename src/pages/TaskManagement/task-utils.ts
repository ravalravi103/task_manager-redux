import axios from "axios";
export const storeTasktoDatabase = (task: Task) => {
  axios
    .post("http://localhost:3000/tasks", task)
    .then((resp: any) => {
      console.log(resp.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
};
