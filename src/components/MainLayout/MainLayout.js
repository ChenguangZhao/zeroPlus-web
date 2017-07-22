import React from "react";
import {Layout,BackTop} from "antd";
import {connect} from "dva";
import Footer from "../../routes/Home/Footer";
import Header from "../../routes/Home/Nav";

function MainLayout(props) {
  const {children} = props;

  return (
    <Layout className="layout">
      <Header/>
      {children}
      <BackTop visibilityHeight={200}/>
      <Footer/>
    </Layout>
  );
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MainLayout);
