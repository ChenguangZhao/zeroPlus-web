import * as productService from '../../services/ProductsService'
import {message} from 'antd';

export default {
  namespace: 'addProducts',
  state: {
    imageUrlArray: []
  },
  reducers: {
    setState(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    * deleteProductsImage({payload: params}, {select, call, put}) {
      const result = yield call(productService.deleteProductsImage, params);
      if (result.code === 0) {
        message.success("Success");
      }
    },
    * addProducts({payload: values}, {select, call, put}) {
      const result = yield call(productService.addProducts, values);
      if (result.code === 0) {
        message.success("Success");
      }
    }
  },
  subscriptions: {},
};
