import {
  handleActions
} from "redux-actions";
import {
  SERVICE_QUERY,
  SERVICE_ADD,
  SERVICE_UPDATE,
  SERVICE_DEL
} from "../constants/actionTypes"
// 查询
export function getServices() {
  return {
    action: SERVICE_QUERY
  }
}
// 新增
export function addService(data) {
  return {
    type: SERVICE_ADD,
    data
  }
}
// 修改
export function updateService(data) {
  return {
    type: SERVICE_UPDATE,
    data
  }
}
// 删除
export function delService(id) {
  return {
    type: SERVICE_DEL,
    id
  }
}
