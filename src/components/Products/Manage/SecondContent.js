import React from 'react';
import './SecondContent.css';
import {Card, Upload, Icon, Modal} from 'antd'


class SecondContent extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({fileList}) => {

    // 显示处理后的图片
    // fileList = fileList.map((file) => {
    //   if (file.response && file.response.data) {
    //     file.url = file.response.data;
    //     file.thumbUrl = file.response.data;
    //   }
    //   return file;
    // });
    this.setState({fileList})
  }

  render() {
    const {previewVisible, previewImage, fileList} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <Card style={{width: '100%', height: 400, marginTop: 10}} title="Images">
        <div className="clearfix">
          <Upload
            className="ant-upload"
            name="multipartFile"
            action="/innerApi/uploadProductsImage.do"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{width: '100%'}} src={previewImage}/>
          </Modal>
        </div>
      </Card>
    );
  }
}

export default SecondContent;
