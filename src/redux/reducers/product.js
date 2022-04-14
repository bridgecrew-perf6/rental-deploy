import { ACTION_STRING } from "../actions/actionString";

const initialState = {
  data: null,
};

const productReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_STRING.productData:
      const data = action.payload;
      //   console.log("data ", data);
      return {
        ...data,
      };
    default:
      return prevState;
  }
};

export default productReducer;
