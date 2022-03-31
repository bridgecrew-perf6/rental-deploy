import { ACTION_STRING } from "../actions/actionString";

export const transferUser = (data) => {
  return {
    type: ACTION_STRING.dataTransfer,
    payload: { data },
  };
};
