import React from "react";
import {connect} from "dva";
import "./AddProduct.css";
import {Breadcrumb, Layout} from "antd";
import {Link} from "react-router";
import AddProductComponent from "../../../components/Products/Manage/AddProduct";

const {Content} = Layout;

function AddProduct() {
  return (
    <div>

      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/AddProduct">Add Product</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 800}}>

        <AddProductComponent />

      </Content>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AddProduct);
