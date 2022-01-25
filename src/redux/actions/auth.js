import { ACTION_STRING } from "./actionString";
import { loginAuth } from "../../utils/https/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: loginAuth(body),
  };
};


