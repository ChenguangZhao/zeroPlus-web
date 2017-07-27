import request from '../utils/request';
import * as postJson from '../utils/postJson';
/**
 * 查询user
 * @returns {Object}
 */
export function queryUser() {
  return request('/innerApi/queryUser.do');
}

export function saveUserBaseInfo(params) {
  return postJson.postJson('/innerApi/saveBaseInfo.do',params);
}
