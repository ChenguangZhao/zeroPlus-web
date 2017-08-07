import React from 'react';
import './ImageCard.css';
import {Card, Upload, Icon, Modal} from 'antd'
import {connect} from 'dva'

class ImageCard extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({previewVisible: false})

  /**
   * 预览
   * @param file
   */
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  /**
   * 改变
   * @param fileList
   */
  handleChange = ({fileList}) => {
    let imageUrlArray = [];
    // 显示处理后的图片
    fileList = fileList.map((file) => {
      if (file.response && file.response.data) {
        file.url = file.response.data;
        file.thumbUrl = file.response.data;
        imageUrlArray.push(file.url);
      }
      return file;
    });
    this.setState({fileList})
    this.props.dispatch({
      type: 'addProducts/setState',
      payload: {
        imageUrlArray: imageUrlArray
      }
    })
  };

  handleRemove = (file) => {
    const url = file.url;
    console.log(this.props)
    this.props.dispatch({
      type: 'addProducts/deleteProductsImage',
      payload: {
        url: url
      }
    })
  };

  render() {
    const {previewVisible, previewImage, fileList} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    console.log(this.props.imageUrlArray);
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
            onRemove={this.handleRemove}
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

function mapStateToProps(state) {
  return {...state.addProducts};
}

export default connect(mapStateToProps)(ImageCard);

