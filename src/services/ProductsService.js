import request from '../utils/request';
import * as postJson from '../utils/postJson';

/**
 * 查询products
 * @returns {Object}
 */
export function queryProducts(id) {
  return request('/innerApi/queryProductById.do?id='+id);
}

/**
 * 删除图片
 * @param params
 * @returns {*}
 */
export function deleteProductsImage(params) {
  return postJson.postJson('/innerApi/deleteProductsImage.do',params);
}
