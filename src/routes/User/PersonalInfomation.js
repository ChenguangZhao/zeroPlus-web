import React from "react";
import {connect} from "dva";
import "./PersonalInfomation.css";
import {Breadcrumb, Layout, Tabs} from "antd";
import {Link} from "react-router";
import UserBaseInfo from "../../components/User/UserBaseInfo";
import Address from '../../components/User/Address';
import DefaultAddress from '../../components/User/DefaultAddress'

const {Content} = Layout;

const TabPane = Tabs.TabPane;

function PersonalInfomation(props) {

  const {user} = props.login;

  return (
    <div >
      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/PersonalInfomation">Personal Infomation</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 800}}>

        {/*<Row >*/}
        {/*<Col span={1}/>*/}
        {/*<Col span={5}>*/}
        {/*<HeadPortrait />*/}
        {/*</Col>*/}

        {/*<Col span={17}>*/}
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="Base Info" key="1">
            <UserBaseInfo user={user}/>
          </TabPane>
          <TabPane tab="Address" key="2">
            <DefaultAddress />
            <Address />
          </TabPane>
        </Tabs>

        {/*</Col>*/}
        {/*<Col span={1}/>*/}

        {/*</Row>*/}

      </Content>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PersonalInfomation);
