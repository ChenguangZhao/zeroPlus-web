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
            label="Publish product on"
          >
            <DatePicker
              style={{width: '100%'}}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select Time"
            />

          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default PriceCard;
