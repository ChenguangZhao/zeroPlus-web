import React from 'react';
import './InventoryCard.css';
import {Card, Form, Input, InputNumber, DatePicker} from 'antd'

const FormItem = Form.Item;

class VariantsCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {getFieldDecorator} = this.props;

    return (
      <Card style={{width: '100%', height: 250, marginTop: 10}} title="Inventory">
        <Form >
          <FormItem
            label="Quantity"
          >
            {getFieldDecorator('quantity', {
              rules: [{required: true, message: 'Please input quantity'}],
            })(
              <InputNumber style={{width: '100%'}} placeholder="1" min={0}/>
            )}
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default VariantsCard;
