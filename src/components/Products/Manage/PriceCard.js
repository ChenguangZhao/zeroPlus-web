import React from 'react';
import './PriceCard.css';
import {Card, Form, Input, InputNumber, DatePicker} from 'antd'

const FormItem = Form.Item;

class PriceCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {getFieldDecorator} = this.props;


    return (
      <Card style={{width: '100%', height: 250, marginTop: 10}} title="Pricing">
        <Form >
          <FormItem
            label="Price"
          >
            {getFieldDecorator('price', {
              rules: [{required: true, message: 'Please input price'}],
            })(
              <Input placeholder="0.00"/>
            )}
          </FormItem>
          <FormItem
            label="Favorable Price"
          >
            {getFieldDecorator('favorablePrice')(
              <Input placeholder="0.00"/>
            )}


          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default PriceCard;
