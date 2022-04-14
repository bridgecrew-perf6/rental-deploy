import { combineReducers } from "redux";

import authReducer from "./auth";
import { ACTION_STRING } from "../actions/actionString";
import storage from "redux-persist/lib/storage";
import transferReducer from "./transfer";
import userReducer from "./user";
import productReducer from "./product";

const appReducer = combineReducers({
  auth: authReducer,
  transfer: transferReducer,
  user: userReducer,
  productData: productReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ACTION_STRING.authLogout) {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

// import { combineReducers } from "redux";
// import authReducer from "./auth";

// const reducers = combineReducers({
//   auth: authReducer,
// });

// export default reducers;
