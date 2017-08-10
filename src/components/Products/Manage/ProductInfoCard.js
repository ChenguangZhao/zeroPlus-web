import React from 'react';
import './ProductInfoCard.css';
import {Card, Input, Form, Row, Col, Anchor} from 'antd'
import ReactQuill from 'react-quill'
import theme from 'react-quill/dist/quill.snow.css'
const FormItem = Form.Item;
const {Link} = Anchor;
import SearchUser from '../../User/SearchUser'
const {TextArea} = Input;

class FirstContent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {text: ''}
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(value) {
    this.setState({text: value})
  };

  handleDesignerChange = (userId) => {
    this.props.dispatch({
      type: 'addProducts/setState',
      payload: {
        userId: userId
      }
    })
  };

  render() {
    const formItemLayout = {
      // wrapperCol: {span: 14}
    }
    const {getFieldDecorator} = this.props;

    return (
      <Row gutter={16}>
        <Col span={22}>
          <Card style={{width: '100%', height: 600, marginTop: 10}}>

            <Form>
              <FormItem
                label="Title"
                {...formItemLayout}
              >
                {getFieldDecorator('name', {
                  rules: [{required: true, message: 'Please input title'}],
                })(
                  <Input placeholder="Title"/>
                )}

              </FormItem>

              <FormItem
                label={
                  <span>
                   <span style={{color: "red"}}>*</span>&nbsp;Designer
                  </span>
                }
                {...formItemLayout}
              >
                {getFieldDecorator('userId')(
                  <SearchUser onChange={this.handleDesignerChange}/>
                )}

              </FormItem>

              <FormItem
                label=" Description"
                {...formItemLayout}
              >
                {getFieldDecorator('description', {
                  rules: [{required: true, message: 'Please input description'}],
                })(
                  <Input placeholder=" Description"/>
                )}
              </FormItem>
              <FormItem
                label=" Product Information"
                {...formItemLayout}
              >
                {getFieldDecorator('information')(
                  <ReactQuill style={{height: 200}}/>
                )}
              </FormItem>
            </Form>
          </Card>
        </Col>
        <Col span={2} style={{zIndex: 8}}>
          <Anchor>
            <Link href="#components-anchor-demo-basic" title=" Basic demo"/>
            <Link href="#components-anchor-demo-fixed" title=" Fixed demo"/>
          </Anchor>
        </Col>
      </Row>



    );
  }
}

export default FirstContent;
