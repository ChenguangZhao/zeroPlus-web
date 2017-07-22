import React from "react";
import {connect} from "dva";
import {Breadcrumb, Layout} from "antd";
import ProductsList from "../../components/Products/ProductsList";
import {Link} from 'react-router';

const {Content} = Layout;

function Products() {
  return (
    <div >
      <Breadcrumb style={{margin: '12px 16px'}}>
        <Breadcrumb.Item><Link to="/web/Home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/web/Products">Product</Link></Breadcrumb.Item>

      </Breadcrumb>
      <Content style={{margin: '0 16px', padding: 24, background: '#fff', minHeight: 500}}>
        <ProductsList />
      </Content>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Products);
