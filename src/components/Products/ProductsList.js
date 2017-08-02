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
          if (item.productsVOS && item.productsVOS.length > 0) {
            return <ProductGroup user={item}/>
          }
        })
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProductsList);
