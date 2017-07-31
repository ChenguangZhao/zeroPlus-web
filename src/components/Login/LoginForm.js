import React from 'react';
import './LoginForm.css';
import {Button, Checkbox, Form, Icon, Input} from 'antd';
import {connect} from 'dva';
const FormItem = Form.Item;

function signOutOfGoogle() {

  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

let auth2;

class LoginForm extends React.Component {


  componentDidMount = () => {

    console.log("init google login");
    const self = this;
    gapi.load('auth2', function () {

      auth2 = gapi.auth2.init({
        client_id: '148335857553-c3igibm0rit240ojghj2cnvnlo6p2q92.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      let element = document.getElementById('loginGoogleButton')

      auth2.attachClickHandler(element, {},
        function (googleUser) {
          console.log(googleUser);
          let params = googleUser.w3;
          params.token = googleUser.getAuthResponse().id_token;
          self.props.dispatch({
            type: 'login/loginWithGoogle',
            payload: params
          });
        }, function (error) {
          alert(JSON.stringify(error, undefined, 2));
        });
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  /**
   * facebook login
   */
  handleLoginWithFacebook = () => {
    const self = this;
    FB.login(function (response) {
      console.log(response);
      if (response.status === 'connected') {
        //取得 accessToken
        let accessToken = response.authResponse.accessToken;
        FB.api('/me?fields=name,first_name,last_name,email,gender,photos', function (response) {
          console.log(response);
          response.accessToken = accessToken;
          self.props.dispatch({
            type: 'login/loginWithFacebook',
            payload: response
          })

        });
      }
    });
  };


  render() {

    const {getFieldDecorator} = this.props.form;

    return (

      <Form onSubmit={this.handleSubmit} className={"login-form"}>

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={"login-form-forgot"} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={"login-form-button"}>
            Log in
          </Button>


          {/*<Button type="primary" className={"login-facebook-button"} onClick={this.handleLoginWithFacebook}>*/}
          {/*<i className="iconfont">&#xe600;</i>*/}
          {/*Log in With Facebook*/}
          {/*</Button>*/}

          {/*<a*/}
          {/*style={{marginTop: 10}}*/}
          {/*className="fb-login-button"*/}
          {/*data-width="300px"*/}
          {/*data-onlogin="checkLoginStateFromFacebook"*/}
          {/*data-max-rows="1"*/}
          {/*data-size="large"*/}
          {/*data-button-type="login_with"*/}
          {/*data-show-faces="false"*/}
          {/*data-auto-logout-link="false"*/}
          {/*data-use-continue-as="false"*/}
          {/*>*/}

          {/*</a>*/}

          {/*<div*/}
          {/*style={{width: 300, marginTop: 10}}*/}
          {/*className="g-signin2"*/}
          {/*data-onsuccess="checkLoginStateFromGoogle"*/}
          {/*data-theme="dark"*/}
          {/*data-longtitle="true">*/}

          {/*</div>*/}
          <div style={{marginTop: 5}}>
            <img src="/image/google.png"
                 style={{
                   maxHeight: 30, width: 30,
                   height: 30,
                   cursor: 'pointer'
                 }}
                 id="loginGoogleButton"
            >
            </img>

            <img src="/image/facebook.png"
                 style={{
                   maxHeight: 30, width: 30,
                   height: 30,
                   cursor: 'pointer',
                   marginLeft: 5
                 }}
                 onClick={this.handleLoginWithFacebook}
            >
            </img>

          </div>

        </FormItem>
      </Form>
    );
  }
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Form.create()(LoginForm));
