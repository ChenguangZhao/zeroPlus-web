import * as addressService from '../../services/AddressService'
import {message} from 'antd';

export default {
  namespace: 'address',
  state: {
    list: [],
    loading: false,
    defaultAddress:null
  },
  reducers: {
    setState(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    *saveAddress({payload: params}, {select, call, put}) {
      const result = yield call(addressService.saveAddress, params);
      yield put({type: 'setState', payload: {loading: true}});
      if (result.code === 0) {
        message.success('Success');
        yield put({
          type: 'queryAddress'
        })
      }
    },
    *queryAddress({}, {select, call, put}) {
      yield put({type: 'setState', payload: {loading: true}});
      const result = yield call(addressService.queryAddressByUserId);
      if (result.code === 0) {
        if(result.data){
          let defaultAddress = null;
          result.data.map((item)=>{
            if(item.isDefault === 1){
              defaultAddress = item;
            }
          });
          yield put({type: 'setState', payload: {defaultAddress: defaultAddress}});
        }
        yield put({type: 'setState', payload: {list: result.data, loading: false}});
      }
    },
    *deleteAddress({payload: params}, {select, call, put}) {
      yield put({type: 'setState', payload: {loading: true}});
      const result = yield call(addressService.deleteAddress, params);
      if (result.code === 0) {
        message.success('Success');
        yield put({
          type: 'queryAddress'
        })
      }
    },
    *settingDefaultAddress({payload: params}, {select, call, put}) {
      yield put({type: 'setState', payload: {loading: true}});
      const result = yield call(addressService.settingDefaultAddress, params);
      if (result.code === 0) {
        message.success('Success');
        yield put({
          type: 'queryAddress'
        })
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/web/PersonalInfomation') {

          //load data
          dispatch({
            type: 'queryAddress',
          });

        }
      })
    }
  },
};
