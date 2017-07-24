import React from 'react';
import  './HeadPortrait.css';
import {Upload, Icon, message} from 'antd'
import {connect} from 'dva';


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  console.log(file.type);
  const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/png');
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}


class HeadPortrait extends React.Component {

  state = {};


  componentWillReceiveProps(nextProps) {
    if (nextProps.login.user.userId && !this.state.imageUrl) {

      this.setState({
        imageUrl: '/innerApi/portrait/' + nextProps.login.user.userId
      })

    }
  };


  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl}));
    }
  };

  render() {

    const imageUrl = this.state.imageUrl;

    return (
      <Upload
        className="avatar-uploader"
        name="multipartFile"
        showUploadList={false}
        action={"/innerApi/uploadHeadPortrait.do"}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        withCredentials={true}
        data={{
          'userId': this.props.login.user.userId
        }}
      >
        {
          imageUrl ?
            <img src={imageUrl} alt="" className="avatar"/> :
            <Icon type="plus" className="avatar-uploader-trigger"/>
        }
      </Upload>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HeadPortrait);
