import request from '../utils/request';

/**
 * 查询products
 * @returns {Object}
 */
export function queryProducts(id) {
  return request('/innerApi/queryProductById.do?id='+id);
}
