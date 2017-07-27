import React from "react";
import "./AddressModal.css";
import {Form, Modal} from "antd";
import AddressForm from "./AddressForm";
import {connect} from "dva";


class AddressModal extends React.Component {

  state = {
    visible: false,
    record: this.props.record
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    const {user} = this.props.login;
    const {dispatch} = this.props;
    const self = this;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(function (err, values) {
      if (!err) {
        if (self.state.record && self.state.record.id) {
          values.id = self.state.record.id;
        }
        values.userId = user.userId;
        dispatch({
          type: 'address/saveAddress',
          payload: values

        })
      }
    });

    this.setState({
      visible: false,
    });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };


  render() {

    return (
      <p className="opertionDiv">
        <span onClick={this.showModal}>
          {this.props.children}
        </span>
        <Modal
          key={this.state.record?this.state.record:0}
          title="Edit"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddressForm form={this.props.form} address={this.state.record}/>

        </Modal>
      </p>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Form.create()(AddressModal));
