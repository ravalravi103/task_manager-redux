import axios from "axios";

//  Add DEV and Prod ENV and respactive BaseURL Here
export const BaseUrl = "http://localhost:3000/";

export const axiosInst = axios.create({
  baseURL: BaseUrl,
  headers: {
    "access-token": localStorage.getItem("accessToken") as string,
  },
});

axiosInst.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message === "Network Error") {
      //  Give Some Snake Message After words
      return Promise.reject({
        response: {
          data: "Network Error",
        },
      });
    } else {
      if (error.response.status === 401) {
        // Give Some Snke Message Afterwords
      }
      return Promise.reject(error);
    }
  }
);
