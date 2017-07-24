import React from 'react';
import {connect} from 'dva';
import  './PersonalInfomation.css';
import {Breadcrumb, Layout,Row,Col} from "antd";
import {Link} from 'react-router';
import HeadPortrait from '../../components/User/HeadPortrait'
const {Content} = Layout;


function PersonalInfomation() {
  return (
    <div >
      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/PersonalInfomation">Personal Infomation</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 500}}>

        <Row>
          <HeadPortrait />
        </Row>

      </Content>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PersonalInfomation);
