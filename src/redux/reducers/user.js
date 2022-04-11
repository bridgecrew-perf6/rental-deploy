import { ACTION_STRING } from "../actions/actionString";

const initialState = {
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_STRING.userData:
      const data = action.payload;
      console.log("data user", data);
      return {
        ...data,
      };
    default:
      return prevState;
  }
};

export default userReducer;
