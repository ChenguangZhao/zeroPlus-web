import React from 'react';
import './DefaultAddress.css';
import {Alert, Row, Col} from 'antd';
import {connect} from 'dva'


function DefaultAddress(props) {
  console.log(props);

  const {defaultAddress} = props.address;
  console.log(defaultAddress);
  return (
    <div>
      {defaultAddress ?
        <Alert
          message="Default Address"
          description={<DefaultAddressForm address={defaultAddress}/>}
          type="success"
        /> :
        <Alert
          message="提示"
          description="未找到默认地址，请在下方添加或者设置"
          type="info"
          showIcon={true}
        />
      }
    </div>

  );
}

function DefaultAddressForm(props) {

  const {address} = props;

  return (
    <div className="default-font">
      <Row>
        <Col span={3}>Country :</Col>
        <Col span={21}>{address.country}</Col>
      </Row>

      <Row>
        <Col span={3}>Full name :</Col>
        <Col span={21}>{address.fullName}</Col>
      </Row>

      <Row>
        <Col span={3}>Street address :</Col>
        <Col span={21}>{address.streetAddress}</Col>
      </Row>

      <Row>
        <Col span={3}>City :</Col>
        <Col span={21}>{address.city}</Col>
      </Row>

      <Row>
        <Col span={3}>State :</Col>
        <Col span={21}>{address.state}</Col>
      </Row>


      <Row>
        <Col span={3}>Zip code :</Col>
        <Col span={21}>{address.zipCode}</Col>
      </Row>

      <Row>
        <Col span={3}>Phone Number :</Col>
        <Col span={21}>{address.phoneNumber}</Col>
      </Row>


    </div>
  )
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DefaultAddress);
