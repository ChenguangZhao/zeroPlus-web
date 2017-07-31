import * as postJson from '../utils/postJson';
import request from '../utils/request';

/**
 * login with facebook
 * @returns {Object}
 */
export function facebookAuth(params) {
  return postJson.postJson('/innerApi/facebookAuth.do', params);
}


/**
 *
 * @returns {Object}
 */
export function queryLoginUser() {
  return request('/innerApi/queryLoginUser.do');
}

/**
 * 登出
 * @returns {Object}
 */
export function logout() {
  return request('/innerApi/logout.do');
}

/**
 * google login
 * @param params
 * @returns {*}
 */
export function googleLoginAuth(params) {
  return postJson.postJson('/innerApi/googleLoginAuth.do', params);
}
