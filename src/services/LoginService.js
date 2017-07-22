import * as postJson from '../utils/postJson';

/**
 * login with facebook
 * @returns {Object}
 */
export function facebookAuth(params) {
  return postJson.postJson('/innerApi/facebookAuth.do',params);
}
