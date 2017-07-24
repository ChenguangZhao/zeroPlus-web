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
