import React from "react";
import {connect} from "dva";
import {Breadcrumb, Layout} from "antd";
import ProductsDetail from '../../components/Products/ProductsDetail';
import {Link} from 'react-router';


const {Content} = Layout;

function Detail() {
  return (
    <div >
      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/Products">Product</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Detail</Breadcrumb.Item>

      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 800}}>
        <ProductsDetail />
      </Content>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Detail);
