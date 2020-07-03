import { reducer, initialState } from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";

const logMiddleware = (store) => (next) => (action) => {
  console.log("before", action, store.getState());
  next(action);
  console.log("after", action, store.getState());
};

const tokenStorage = (store) => (next) => (action) => {
  if (action?.meta?.token) {
    const newToken = action.meta.token;
    const oldToken = store.getState().token;
    if (newToken !== oldToken) {
      localStorage.setItem("token", action.meta.token);
    }
  }
  return next(action);
};

const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const storeEnhancer = composeEnhancers(
    applyMiddleware(
      logMiddleware,
      tokenStorage
      // reduxThunkMiddleware
      // axiosMiddleware
      // reduxSage
    )
  );

  const store = createStore(reducer, initialState, storeEnhancer);
  return store;
};

export default initStore;
