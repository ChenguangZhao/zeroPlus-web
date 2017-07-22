import React from 'react';
import  './ProductGroup.css';
import {connect} from "dva";
import {Row, Avatar, Col, Card, Popover} from 'antd';
import UserTip from '../User/UserTip';

function ProductGroup(props) {
  const {content} = props;

  return (
    <li className={"normal"}>
      <Row >
        <Col span={6} style={{cursor: "pointer"}}>
          <UserTip user={content}>
            <h2>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              {content.username}
            </h2>
          </UserTip>
        </Col>
      </Row>

      <Row style={{marginTop: 10, marginBottom: 20}}>
        {content.productsVOS.map((item, i) => {
          return (
            <Col span={6}>
              <Card className={"card"} bodyStyle={{padding: 0}} onClick={() => {
                window.location.href = '/web/ProductDetail?id=' + item.id;
              }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                       style={{
                         maxHeight: 240,
                         height: 240,
                       }}
                  />
                </div>
                <div className="custom-card">
                  <h3>{item.name}</h3>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </li>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProductGroup);
