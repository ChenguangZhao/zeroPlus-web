import React from "react";
import "./AddProduct.css";
import {Button, Col, Row, Form, message} from "antd";
import ProductInfoCard from "./ProductInfoCard";
import ImageCard from "./ImageCard";
import PriceCard from "./PriceCard";
import InventoryCard from "./InventoryCard";
import {connect} from 'dva'

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSave = (e) => {
    const self = this;
    e.preventDefault();
    self.props.form.validateFieldsAndScroll(function (err, values) {
      if (!err) {
        //image
        if (self.props.imageUrlArray.length < 1) {
          message.error("请上传至少一个图片");
          return;
        }
        values.imageUrlArray = self.props.imageUrlArray;
        //userId
        if (!self.props.userId) {
          message.error("Please input designer");
          return;
        }
        values.userId = self.props.userId;
        self.props.dispatch({
          type: 'addProducts/addProducts',
          payload: values
        })
      }
    })
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {dispatch} = this.props;
    return (
      <div>
        <ProductInfoCard getFieldDecorator={getFieldDecorator} dispatch={dispatch}/>
        <ImageCard/>
        <Row gutter={16}>
          <Col span={12}>
            <PriceCard getFieldDecorator={getFieldDecorator}/>
          </Col>
          <Col span={12}>
            <InventoryCard getFieldDecorator={getFieldDecorator}/>
          </Col>
        </Row>
        <Button onClick={this.handleSave} size="large" style={{marginTop: 10}}>Save</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {...state.addProducts};
}

export default connect(mapStateToProps)(Form.create()(AddProduct));
