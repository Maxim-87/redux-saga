import { combineReducers } from "redux";
import counterReducer from "./counter";
import newsReducer from "./news";
import errorsReducer from "./errors";
import { connectRouter } from "connected-react-router";
import {createBrowserHistory} from "history";
import loaderReducer from "./loader";

export const history = createBrowserHistory();

const reducer = combineReducers({
  counter: counterReducer,
  news: newsReducer,
  errors: errorsReducer,
  loader: loaderReducer,
  router: connectRouter(history),
})

export default reducer;