import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";


import reducers from "./reducers";

const enchancers = applyMiddleware(rpm, logger);
export const store = createStore(reducers, enchancers);


