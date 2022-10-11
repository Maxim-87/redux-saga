import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
import rootSaga from "./sagas";
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const configureStore = (preloadedState: any) => createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({});
sagaMiddleware.run(rootSaga)  //----must before store

export default store;
