import React from 'react';
import {connect} from 'dva';
import styles from './Register.css';
import {Breadcrumb, Layout} from 'antd'
import RegisterForm from '../../components/Register/RegisterForm';
import {Link} from 'react-router';

const {Content} = Layout;
function Register() {
  return (
    <div >
      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/Register">Register</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 880}}>
        <RegisterForm />
      </Content>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Register);
