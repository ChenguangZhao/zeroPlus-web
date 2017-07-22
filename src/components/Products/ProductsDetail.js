import React from 'react';
import  './ProductsDetail.css';
import {Row, Col, Card, Tag, Button, Icon, Tabs, Affix} from 'antd';
import {connect} from "dva";
import UserTip from '../User/UserTip';
import CustomerReviews from './CustomerReviews';

const TabPane = Tabs.TabPane;


function ProductsDetail(props) {

  const {detail} = props.productDetail;

  /**
   * share
   */
  function handleShare() {
    FB.ui({
      method: 'share',
      display: 'popup',
      href: 'https://zeropluscloset.com/',
    }, function (response) {
    });
  }

  return (
    <div>

      <Row gutter={50}>
        <Col span={1}/>
        <Col span={8}>
          <Card bodyStyle={{padding: '10%'}}>
            <div className="custom-image">
              <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                   style={{
                     maxHeight: 320,
                     height: 320,
                   }}
              />
            </div>
            <div className="custom-card">
              <h3>sss</h3>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={16}>
              <h2>
                {detail.name}
              </h2>
            </Col>
            <Col span={8}>
              <Button type="dashed" icon="heart-o">收藏</Button>
              <Button style={{marginLeft: 5}} type="dashed" icon="share-alt" onClick={handleShare}>Share</Button>
            </Col>
          </Row>
          <Row className={"row"}>
            Designer：
            <UserTip user={detail.userVO}>
              <a>{detail.userVO.username}</a>
            </UserTip>
          </Row>
          <Row className={"row"}>
            <Tag color="#3CB371">In Stock.</Tag>
          </Row>
          <p style={{marginTop: 10}}>{detail.description}</p>
        </Col>
        <Col span={1}/>
      </Row>


      <Row gutter={50} style={{marginTop: 20}}>
        <Col span={1}/>
        <Col span={22}>
          <Affix>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Product Information" key="1">
              </TabPane>
              <TabPane tab="Customer Reviews" key="2">
                <CustomerReviews/>
              </TabPane>
            </Tabs>
          </Affix>
        </Col>
        <Col span={1}/>

      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProductsDetail);
