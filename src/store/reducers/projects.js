import {
  handleActions
} from "redux-actions";
import {
  SERVICE_ADD,
  SERVICE_DEL
} from "../constants/actionTypes"
const initialState = {
  servicesCount: 0,
  services: [],
  loading: false,
  errorMsg: ""
};
let uuid = 1;
// reducer
const reducer = handleActions({
  ["SERVICE_ADD"](state, action) {
    console.log("project SERVICE_ADD ...")
    const servicesCount = state.servicesCount++;
    return {...state,
      servicesCount
    };
  },
  ["SERVICE_DEL"](state, action) {
    const servicesCount = state.servicesCount--;
    return {...state,
      servicesCount
    };
  }
}, initialState);

export default reducer;
