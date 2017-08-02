import React from 'react';
import  './ProductGroup.css';
import {connect} from "dva";
import {Row, Avatar, Col, Card, Icon} from 'antd';
import UserTip from '../User/UserTip';

class ProductGroup extends React.Component {

  render() {
    const {user} = this.props;

    return (
      <li className={"normal"}>
        <Row >
          <Col span={6} style={{cursor: "pointer"}}>
            <UserTip user={user}>
              <h2>
                <Avatar src={"/innerApi/portrait/" + user.userId}/>
                <span style={{marginLeft: 5}}>{user.username}</span>
              </h2>
            </UserTip>
          </Col>
          <Col span={15}/>
          {user.productsVOS.length > 4 ?
            <Col>
              <a style={{color: '#6c6c6c'}}>显示更多<Icon type="right"/></a>
            </Col>
            : ''
          }
        </Row>
        <Row>
          <Row style={{marginTop: 10, marginBottom: 20}} >
            {user.productsVOS.map((item, i) => {
              if (i < 4) {
                return (
                  <Col span={6}>
                    <Card className={"card"} bodyStyle={{padding: 0}} onClick={() => {
                      window.location.href = '/web/ProductDetail?id=' + item.id;
                    }}>
                      <div className="custom-image">
                        <img alt="example" width="100%" src={item.pictureUrl}
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
              }
            })}
          </Row>

        </Row>

      </li>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProductGroup);
