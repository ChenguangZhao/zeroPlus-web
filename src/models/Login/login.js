import * as LoginService from '../../services/LoginService'
import * as urlUtil from '../../utils/url';
import {message} from 'antd';
import {routerRedux} from 'dva/router';

export default {
  namespace: 'login',
  state: {
    user: {}
  },
  reducers: {
    setState(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    * loginWithFacebook({payload: params}, {select, call, put}) {
      const result = yield call(LoginService.facebookAuth, params);
      const urlParams = urlUtil.getQuery();
      if (result.code === 0) {
        message.success("Login Success");
        if (urlParams.back) {
          window.location.href = urlParams.back;
        } else {
          window.location.href = "/web/PersonalInfomation";
        }
      }
    },
    * loginWithGoogle({payload: params}, {select, call, put}) {
      console.log("loginWithGoogle");
      console.log(params);
      const result = yield call(LoginService.googleLoginAuth, params);
      const urlParams = urlUtil.getQuery();
      if (result.code === 0) {
        message.success("Login Success");
        if (urlParams.back) {
          window.location.href = urlParams.back;
        } else {
          window.location.href = "/web/PersonalInfomation";
        }
      }


    },
    * queryLoginUser({payload: params}, {select, call, put}) {
      const result = yield call(LoginService.queryLoginUser);
      if (result.code === 0) {
        if (result.data === null) {
          console.log("未登录");
          if (window.location.pathname === "/web/PersonalInfomation") {
            yield put(routerRedux.push(`/web/Login?back=${window.location.pathname}`));
          }
        } else {
          console.log("已登录");
          console.log(result.data);
          yield put({type: 'setState', payload: {user: result.data}});
        }
      }
    },
    *logout({payload: params}, {select, call, put}) {
      const result = yield call(LoginService.logout);
      if (result.code === 0) {
        message.success("Logout Success");
        window.location.href = '/web/';
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {

        window.fbAsyncInit = function () {
          FB.init({
            appId: '116217095690736',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
          });
          FB.AppEvents.logPageView();

          FB.getLoginStatus(function (response) {
            console.log(response);
            if (response.status === "connected") {
              dispatch({
                type: 'queryLoginUser',
              });
            } else {
              if (location.pathname === "/web/PersonalInfomation") {
                window.location.href = '/web/Login';
              }
            }
          });
        };


        (function (d, s, id) {
          let js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        dispatch({
          type: 'queryLoginUser',
        });

      })

    }
  },
};
