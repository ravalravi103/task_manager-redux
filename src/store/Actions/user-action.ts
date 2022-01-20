import axios from "axios";
import { json } from "stream/consumers";
import { GET_USER, GET_USER_FAIL, STORE_USER } from "./user-action-type";

type LoginUserDataType = {
  userName: string;
  password: string;
};

const storeUser = () => ({
  type: STORE_USER,
});

export const storeUserAction = (user: User, file: any) => {
  return (dispatch: any) => {
    const cloudeName = "dei4oonwk";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "h9thfxaw");
    const cloudeUrl = `https://api.cloudinary.com/v1_1/${cloudeName}/image/upload`;
    axios
      .post(cloudeUrl, formData)
      .then((response) => {
        const {
          data: { url },
        } = response;

        console.log(url);

        axios
          .post("http://localhost:3000/users", { ...user, profile_pic: url })
          .then(({ data }) => {
            dispatch(storeUser());
            const { accessToken, user } = data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/task-manager";
          })
          .catch(console.log);
      })
      .catch(console.log);
  };
};

const getUser = (payload: any) => ({
  type: GET_USER,
  payload,
});

const getUserFail = () => ({
  type: GET_USER_FAIL,
});

export const getUserAction = ({ userName, password }: LoginUserDataType) => {
  return (dispatch: any) => {
    const payload = { email: userName, password };
    axios
      .post(`http://localhost:3000/login`, payload)
      .then(({ data }) => {
        if (!data) {
          dispatch(getUserFail());
        }
        const { accessToken, user } = data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(getUser(data));
        window.location.href = "/task-manager";
      })
      .catch(console.log);
  };
};
