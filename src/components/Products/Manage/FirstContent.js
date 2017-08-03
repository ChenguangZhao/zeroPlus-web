import React from 'react';
import './FirstContent.css';
import {Card, Input, Form,Row,Col,Anchor} from 'antd'
import ReactQuill from 'react-quill'
import theme from 'react-quill/dist/quill.snow.css'
const FormItem = Form.Item;
const { Link } = Anchor;

const {TextArea} = Input;

class FirstContent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {text: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({text: value})
  }


  render() {
    const formItemLayout = {
      // wrapperCol: {span: 14}
    }
    return (
      <Row gutter={16}>
        <Col span={22}>
          <Card style={{width: '100%', height: 500, marginTop: 10}}>
            {/*<h3>Title</h3>*/}
            {/*<Input size="large"/>*/}

            {/*<h3>Description</h3>*/}
            {/*<TextArea rows={4}/>*/}

            {/*<h3>Product Information</h3>*/}
            {/*<ReactQuill*/}
            {/*style={{height: 200}}*/}
            {/*value={this.state.text}*/}
            {/*onChange={this.handleChange}/>*/}

            <Form>
              <FormItem
                label="Title"
                {...formItemLayout}
              >
                <Input placeholder="Title"/>
              </FormItem>
              <FormItem
                label="Description"
                {...formItemLayout}
              >
                <Input placeholder="Description"/>
              </FormItem>
              <FormItem
                label="Product Information"
                {...formItemLayout}
              >
                <ReactQuill style={{height: 200}} value={this.state.text} onChange={this.handleChange}/>
              </FormItem>
            </Form>
          </Card>
        </Col>
        <Col span={2} style={{zIndex: 8}}>
          <Anchor>
            <Link href="#components-anchor-demo-basic" title="Basic demo"/>
            <Link href="#components-anchor-demo-fixed" title="Fixed demo"/>
          </Anchor>
        </Col>
      </Row>



    );
  }
}

export default FirstContent;
