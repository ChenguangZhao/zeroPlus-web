import React from 'react';
import  './LoginForm.css';
import {Form, Icon, Input, Button, Checkbox, message} from 'antd';
import {connect} from 'dva';

const FormItem = Form.Item;

class LoginForm extends React.Component {
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
      if (response.status === 'connected') {
        //取得 accessToken
        let accessToken = response.authResponse.accessToken;
        FB.api('/me?fields=name,first_name,last_name,email', function (response) {
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
          <Button type="primary" className={"login-facebook-button"} onClick={this.handleLoginWithFacebook}>
            Log in With Facebook
          </Button>

          Or <a href="/web/Register">register now!</a>
        </FormItem>
      </Form>
    );
  }
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Form.create()(LoginForm));
