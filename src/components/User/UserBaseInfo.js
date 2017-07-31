import React from "react";
import "./UserBaseInfo.css";
import {AutoComplete, Button, DatePicker, Form, message, Radio} from "antd";
import HeadPortrait from "../../components/User/HeadPortrait";
import moment from "moment";
import * as request from "../../utils/postJson";

const {MonthPicker, RangePicker} = DatePicker;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = AutoComplete.Option;
const dateFormat = 'YYYY-MM-DD';

class UserBaseInfo extends React.Component {

  state = {
    result: [],
    loading:false
  };

  /**
   *
   */
  handleSaveBaseInfo = (e) => {
    e.preventDefault();
    const self = this;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (values.birthday) {
          values.birthday = values.birthday.format(dateFormat);
        }
        values.userId = this.props.user.userId;
        this.setState({loading: true});
        let promise = request.postJson('/innerApi/saveBaseInfo.do',values);
        promise.then(function (result) {
          if(result.code === 0) {
            message.success("Success");
          }
          self.setState({loading: false});
        });

      }
    });
  };

  handleSearchEmail = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({result});
  }


  render() {

    const {user} = this.props;
    const {getFieldDecorator} = this.props.form;

    const {result} = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 3},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 10,
          offset: 0,
        },
        sm: {
          span: 10,
          offset: 3,
        },
      },
    };


    return (
      <div >
        <Form >
          <FormItem
            {...formItemLayout}
            label={
              <span>Portrait
              </span>
            }
            extra="仅支持JPG、PNG格式，大小不能超过2M"
          >
            {getFieldDecorator('portrait')(
              <HeadPortrait />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Username"
          >
            {getFieldDecorator('username', {
              initialValue: user.username
            })(
              <h3>{user.username}</h3>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="First Name"
          >
            {getFieldDecorator('firstName', {
              initialValue: user.firstName
            })(
              <h3>{user.firstName}</h3>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Last Name"
          >
            {getFieldDecorator('lastName', {
              initialValue: user.lastName
            })(
              <h3>{user.lastName}</h3>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Gender"
          >
            {getFieldDecorator('gender', {
              initialValue: user.gender
            })(
              <RadioGroup>
                <Radio value="female">female</Radio>
                <Radio value="male">male</Radio>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Email"
          >
            {getFieldDecorator('email', {
              initialValue: user.email
            })(
              <AutoComplete
                style={{width: '40%'}}
                onSearch={this.handleSearchEmail}
                placeholder="input email"
              >
                {children}
              </AutoComplete>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Birthday"
          >
            {getFieldDecorator('birthday', {
              initialValue:user.birthday?moment(user.birthday):""
            })(
              <DatePicker
                style={{width: '40%'}}
                 format={dateFormat}/>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button loading={this.state.loading} icon="save" onClick={this.handleSaveBaseInfo}>Save</Button>
          </FormItem>

        </Form>
      </div>
    );
  }
}

export default Form.create()(UserBaseInfo);
