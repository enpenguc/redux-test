// Use require.context to require reducers automatically
// Ref: https://webpack.github.io/docs/context.html
import {
  combineReducers
} from "redux";
import {
  service
} from "./services/service";
const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const reducers = keys.reduce((memo, key) => {
  memo[key.match(/([^\/]+)\.js$/)[1]] = context(key); // eslint-disable-line no-param-reassign
  return memo;
}, {});

const initialState = {
  services: {
    service
  }
}

function entities(state = initialState, action) {
  if (action.response && action.response.entities) {
    const d = {
      entities: action.response.entities
    }
    return { ...state, ...d}
  }
  return state
}

export default combineReducers({...reducers, entities});
