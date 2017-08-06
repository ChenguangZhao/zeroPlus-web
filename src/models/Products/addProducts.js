import * as productService from '../../services/ProductsService'
import {message} from 'antd';

export default {
  namespace: 'addProducts',
  state: {},
  reducers: {},
  effects: {
    * deleteProductsImage({payload: params}, {select, call, put}) {
      const result = yield call(productService.deleteProductsImage, params);
      if (result.code === 0) {
        message.success("Success");
      }
    }
  },
  subscriptions: {},
};
