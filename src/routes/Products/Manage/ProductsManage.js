import React from "react";
import {connect} from "dva";
import styles from "./ProductsManage.css";
import {Breadcrumb, Layout, Button, Icon} from "antd";
import {Link} from "react-router";
const {Content} = Layout;

function ProductsManage() {
  return (
    <div className={styles.normal}>

      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/ProductsManage">Products Manage</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 800}}>
        <Button onClick={() => {
          window.location.href = "/web/AddProduct";
        }}><Icon type="plus"/>Add Product</Button>
      </Content>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ProductsManage);
