import { ACTION_STRING } from "../actions/actionString";

export const product = (data) => {
  return {
    // productData
    type: ACTION_STRING.productData,
    payload: { data },
  };
};
