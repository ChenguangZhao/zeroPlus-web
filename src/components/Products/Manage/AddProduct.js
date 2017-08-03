import React from "react";
import "./AddProduct.css";
import {Button, Input, message, Steps} from "antd";
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: <FirstContent />,
}, {
  title: 'Second',
  content: <SecondContent />,
}, {
  title: 'Last',
  content: 'Last-content',
}];


class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  // next = () => {
  //   const current = this.state.current + 1;
  //   this.setState({current});
  // }
  // prev() {
  //   const current = this.state.current - 1;
  //   this.setState({ current });
  // }
  render() {
    const {current} = this.state;
    return (
      <div>
        {/*<Steps current={current}>*/}
          {/*{steps.map(item => <Step key={item.title} title={item.title}/>)}*/}
        {/*</Steps>*/}
        {/*<div className="steps-content">{steps[this.state.current].content}</div>*/}
        {/*<div className="steps-action">*/}
          {/*{*/}
            {/*this.state.current > 0*/}
            {/*&&*/}
            {/*<Button  onClick={() => this.prev()}>*/}
              {/*Previous*/}
            {/*</Button>*/}
          {/*}*/}
          {/*{*/}
            {/*this.state.current < steps.length - 1*/}
            {/*&&*/}
            {/*<Button style={{marginTop: 10,marginLeft:10}} type="primary" onClick={() => this.next()}>Next</Button>*/}
          {/*}*/}
          {/*{*/}
            {/*this.state.current === steps.length - 1*/}
            {/*&&*/}
            {/*<Button style={{marginTop: 10,marginLeft:10}} type="primary"*/}
                    {/*onClick={() => message.success('Processing complete!')}>Done</Button>*/}
          {/*}*/}
        {/*</div>*/}

        <FirstContent/>
        <SecondContent/>
      </div>
    );
  }
}

export default AddProduct;
