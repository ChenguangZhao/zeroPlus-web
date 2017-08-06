import React from "react";
import "./AddProduct.css";
import {Button, Col, Row, Form} from "antd";
import ProductInfoCard from "./ProductInfoCard";
import ImageCard from "./ImageCard";
import PriceCard from "./PriceCard";
import VariantsCard from "./VariantsCard";


class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSave = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(function (err, values) {
      if (!err) {
      }
    })
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <ProductInfoCard getFieldDecorator={getFieldDecorator}/>
        <ImageCard/>
        <Row gutter={16}>
          <Col span={12}>
            <PriceCard getFieldDecorator={getFieldDecorator}/>
          </Col>
          <Col span={12}>
            <VariantsCard />
          </Col>
        </Row>
        <Button onClick={this.handleSave} size="large" style={{marginTop: 10}}>Save</Button>
      </div>
    );
  }
}

export default Form.create()(AddProduct);
