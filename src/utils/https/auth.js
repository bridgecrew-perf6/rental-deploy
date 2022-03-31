import axios from "axios";

const URL = process.env.REACT_APP_HOST + "/auth/login";
export const loginAuth = (body) => {
  return axios.post(URL, body);
};

const URLregister = process.env.REACT_APP_HOST + "/auth/register";
export const registerAuth = (body) => {
  return axios.post(URLregister, body);
};

export const logoutAuth = (token) => {
  const URLlogout = `${process.env.REACT_APP_HOST}/auth/logout`;
  return axios.delete(URLlogout, {
    headers: {
      "x-access-token": token,
    },
  });
};
