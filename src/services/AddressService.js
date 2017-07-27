import * as postJson from '../utils/postJson';
import request from '../utils/request';

/**
 *
 * @param params
 * @returns {*}
 */
export function saveAddress(params) {
  return postJson.postJson('/innerApi/saveAddress.do', params);
}

/**
 *
 * @returns {Object}
 */
export function queryAddressByUserId() {
  return request('/innerApi/queryAddressByUserId.do');
}

/**
 *
 * @param params
 * @returns {*}
 */
export function deleteAddress(params) {
  return postJson.postJson('/innerApi/deleteAddress.do', params);
}
