import React from "react";
import ProductGroup from "./ProductGroup";
import {connect} from "dva";

function ProductsList(props) {

  const {datasource} = props.products;
  console.log(datasource);
  return (
    <ul>
      {
        datasource.map((item, i) => {
          return <ProductGroup content={item}/>
        })
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProductsList);
