import {
  handleActions
} from "redux-actions";
import {
  SERVICE_QUERY,
  SERVICE_ADD,
  SERVICE_UPDATE,
  SERVICE_DEL
} from "../constants/actionTypes"
const initialState = {
  services: [],
  loading: false,
  errorMsg: ""
};
let uuid = 1;
// reducer
const reducer = handleActions({
  [SERVICE_QUERY](state, action) {
    return {...state,
      loading: true
    };
  },
  [SERVICE_ADD](state, action) {
    console.log("services SERVICE_ADD ...")
    const id = `_${uuid++}`;
    const data = action.data;
    const services = state.services.concat([{...data,
      id
    }]);
    return {...state,
      services,
      loading: true
    };
  },
  [SERVICE_UPDATE](state, action) {
    console.log("services SERVICE_UPDATE...", state, action);
    const services = state.services.map(item => {
      return item.id === action.data.id ? action.data : item;
    });
    return {...state, services}
  },
  [SERVICE_DEL](state, action) {
    const services = state.services.filter(item => item.id !== action.id);
    return {...state,
      services
    };
  }
}, initialState);

export default reducer;
