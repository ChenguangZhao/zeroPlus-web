import React from 'react';
import  './UploadImage.css';
import {Upload, Icon, message, Button, Slider} from 'antd'
import {connect} from 'dva';
import AvatarEditor from 'react-avatar-editor'
import reqwest from 'reqwest';


function convertBase64UrlToBlob(urlData) {
  let bytes = window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
  //处理异常,将ascii码小于0的转换为大于0
  let ab = new ArrayBuffer(bytes.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }

  return new Blob([ab], {type: 'image/png'});
}

class UploadImage extends React.Component {

  state = {
    scale: 1,
    file: null,
    uploading: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.user.userId && !this.state.imageUrl) {
      this.setState({
        imageUrl: '/innerApi/portrait/' + nextProps.login.user.userId
      })

    }
  };

  beforeUpload = (file) => {

    const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/png');
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    this.setState({file});
    // return isJPG && isLt2M;
    return false;
  };

  handleChangeSlider = (v) => {
    this.setState({
      scale: v
    });
  }

  setEditorRef = (editor) => {
    if (editor) this.editor = editor
  };

  // handleChange = (info) => {
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     this.getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl}));
  //   }
  // };

  handleSaveImage = (data) => {
    const imgUrl = this.editor.getImageScaledToCanvas().toDataURL();
    // const rect = this.editor.getCroppingRect();
    console.log(this.editor);
    console.log(this.editor.state.image);

    const file = convertBase64UrlToBlob(imgUrl);
    console.log(file);
    this.setState({uploading: true});

    const formData = new FormData();
    formData.append('multipartFile', file);
    const self = this;

    // reqwest({
    //   url: '/innerApi/uploadHeadPortrait.do',
    //   method: 'post',
    //   processData: false,
    //   data: formData,
    //   success: () => {
    //     this.setState({
    //       file: null,
    //       uploading: false,
    //     });
    //     message.success('upload successfully.');
    //     window.location.reload();
    //   },
    //   error: () => {
    //     this.setState({
    //       uploading: false,
    //     });
    //     message.error('upload failed.');
    //   },
    // });
  }

  render() {

    const file = this.state.file;

    return (
      <div>
        {
          file ?
            <div>

              <AvatarEditor
                ref={this.setEditorRef}
                image={file}
                width={200}
                height={200}
                border={20}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={this.state.scale}
                rotate={0}
                onSave={this.handleSaveImage}
              />

              <Slider style={{width: '20%'}} defaultValue={this.state.scale} max={2} min={0.5} step={0.1}
                      onChange={this.handleChangeSlider}/>
              <Button onClick={this.handleSaveImage} loading={this.state.uploading}>
                <Icon type="save"/> Save
              </Button>

            </div>
            :
            <Upload
              name="multipartFile"
              showUploadList={false}
              action={"/web/"}
              beforeUpload={this.beforeUpload}
              // onChange={this.handleChange}
              withCredentials={true}
              data={{
                'userId': this.props.login.user.userId
              }}
            >
              <img src={this.state.imageUrl} alt="" style={{width: 200, height: 200}} className="avatar"/>
              <br />
              <Button>
                <Icon type="upload"/> Select File
              </Button>
            </Upload>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UploadImage);
