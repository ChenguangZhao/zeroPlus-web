import React from 'react';
import './AddressForm.css';
import {Form, Input} from 'antd'


const {TextArea} = Input;
const FormItem = Form.Item;

class AddressForm extends React.Component {

  state = {
    address: this.props.address
  };

  render() {

    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };


    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="Country"
        >
          {getFieldDecorator('country', {
            initialValue: this.state.address ? this.state.address.country : '',
            rules: [{
              required: true, message: 'Please input country!',
            }]
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Full name"
        >
          {getFieldDecorator('fullName', {
            initialValue: this.state.address ? this.state.address.fullName : '',
            rules: [{
              required: true, message: 'Please input full name!',
            }]
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Street address"
        >
          {getFieldDecorator('streetAddress', {
            initialValue: this.state.address ? this.state.address.streetAddress : '',
            rules: [{
              required: true, message: 'Please input street address!',
            }]
          })(
            <TextArea rows={3}/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="City"
        >
          {getFieldDecorator('city', {
            initialValue: this.state.address ? this.state.address.city : '',
            rules: [{
              required: true, message: 'Please input city!',
            }]
          })(
            <Input />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="State"
        >
          {getFieldDecorator('state', {
            initialValue: this.state.address ? this.state.address.state : '',
            rules: [{
              required: true, message: 'Please input state!',
            }]
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Zip code"
        >
          {getFieldDecorator('zipCode', {
            initialValue: this.state.address ? this.state.address.zipCode : '',
            rules: [{
              required: true, message: 'Please input zip code!',
            }]
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phoneNumber', {
            initialValue: this.state.address ? this.state.address.phoneNumber : '',
            rules: [{
              required: true, message: 'Please input phone number !',
            }]
          })(
            <Input />
          )}
        </FormItem>
      </Form>
    );
  }
}


export default AddressForm;
