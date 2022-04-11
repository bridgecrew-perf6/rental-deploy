import { ACTION_STRING } from "../actions/actionString";

export const userActive = (data) => {
  return {
    type: ACTION_STRING.userData,
    payload: { data },
  };
};
