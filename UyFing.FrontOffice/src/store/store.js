import { applyMiddleware, createStore } from "redux";
import monitorReducerEnhancer from "./enhancers/monitorReducerEnhancer";
import loggerMiddleware from "./middleware/logger";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  // middleware de logger personalizado y middleware de saga para las request al servidor
  const middlewares = [loggerMiddleware, sagaMiddleware];
  // compone todo los middleware con el enhancer de appluMiddleware
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // enhancer de middlewares y enhancer personalizado
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  // en lugar de compose se usa composeWithDevTools para agregar las tools de desarrollo
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // if (process.env.NODE_ENV !== "production" && module.hot) {
  //   module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  // }

  sagaMiddleware.run(rootSaga);

  return store;
}
