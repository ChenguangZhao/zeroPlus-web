import * as urlUtil from '../../utils/url';
import * as ProductService from '../../services/ProductsService'

export default {
  namespace: 'productDetail',
  state: {
    detail: {
      userVO: {}
    }
  },
  reducers: {
    setState(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    * queryProductDetail({payload: params}, {select, call, put}) {
      const result = yield call(ProductService.queryProducts, params.id);
      if (result.code === 0) {
        yield put({type: 'setState', payload: {detail: result.data}});
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/web/ProductDetail') {
          const params = urlUtil.getQuery();
          const id = params.id;

          //load data
          dispatch({
            type: 'queryProductDetail',
            payload: {
              id: id
            }
          });
        }
      })
    }
  },
};
