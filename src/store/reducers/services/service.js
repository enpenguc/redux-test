import {
  handleActions
} from "redux-actions";
import {
  SERVICE_QUERY,
  SERVICE_ADD,
  SERVICE_UPDATE,
  SERVICE_DEL
} from "../../constants/actionTypes"
const initialState = {
  name: "",
  desc: "",
  type: ""
};
// reducer
const reducer = handleActions({
  [SERVICE_UPDATE](state, action) {
    console.log("单个服务修改...", state, action);
    return {...state,
      ...action.data
    };
  }
}, initialState);

export default reducer;
