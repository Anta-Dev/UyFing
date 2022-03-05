import reduceReducers from "reduce-reducers";

const initialState = {
  prueba: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case "algo":
      return {
        ...state,
      };
      break;

    default:
      return {
        ...state,
      };
      break;
  }
}

const appConfig = reduceReducers(initialState, user);
export default appConfig;
