import request from '../utils/request';

/**
 * 查询user
 * @returns {Object}
 */
export function queryUser() {
  return request('/innerApi/queryUser.do');
}
