import * as UserService from '../../services/UserService'

export default {
  namespace: 'products',
  state: {
    datasource: []
  },
  reducers: {
    setState(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    * queryProducts({}, {select, call, put}) {
      const result = yield call(UserService.queryUser);
      if (result.code === 0) {
        yield put({type: 'setState',payload: {datasource: result.data}});
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/web/Products') {

          //load data
          dispatch({
            type: 'queryProducts',
          });

        }
      })
    }
  },
};
