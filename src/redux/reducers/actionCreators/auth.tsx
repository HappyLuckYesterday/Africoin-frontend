import { SET_CURRENT_USER, GET_ERRORS } from "../actionTypes/types";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const loginUser = (userData: any, dispatch: any, navigate: any) => {
  console.log(userData);
  axios
    .post("https://africoin-web.vercel.app/api/user/login", userData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      const user = jwtDecode(res.data.token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: user,
      });
      navigate("/admin/user");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const logoutUser = (navigate: any, dispatch: any) => {
  localStorage.removeItem("token");
  dispatch({
    type: SET_CURRENT_USER,
    payload: null,
  });
  navigate("/login");
};
