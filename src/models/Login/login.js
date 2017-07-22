import * as LoginService from '../../services/LoginService'
import * as urlUtil from '../../utils/url';
import {message} from 'antd';

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
      if (result.code === 0 && urlParams.back) {
        message.success("Login Success");
        window.location.href = urlParams.back;

      }
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        window.fbAsyncInit = function () {
          FB.init({
            appId: '151496775419878',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
          });
          FB.AppEvents.logPageView();

          FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
              FB.api('/me', function (response) {

                dispatch({
                  type: 'setState',
                  payload: {
                    user: response
                  }
                });
              });
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
          js.src = "//connect.facebook.com/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      })

    }
  },
};
