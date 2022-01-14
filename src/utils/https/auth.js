import axios from "axios";

const URL = process.env.REACT_APP_HOST + '/auth/signIn'; 
export const loginAuth = (body) => {
  return axios.post(URL, body);
};

const URLregister = process.env.REACT_APP_HOST+ "/auth/SignUp";
export const registerAuth = (body) => {
  return axios.post(URLregister, body)
}