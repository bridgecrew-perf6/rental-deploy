// import { ACTION_STRING } from "src/store/actions/actionString";
import { ACTION_STRING } from "../actions/actionString";

// import { ActionType } from "redux-promise-middleware";

const initialState = {
  dataTransfer: null,
};

const transferReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_STRING.dataTransfer:
      const data = action.payload;
      console.log("data transfer", data);
      return {
        ...data,
      };
    default:
      return prevState;
  }
};

export default transferReducer;
