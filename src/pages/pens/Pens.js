import React from 'react';
import Banner from "../../components/body-container/banner/Banner";
import Products from "../../components/product-store/products-pens/Products";

const pens = ({ProductsDataPen, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div className='container'>
      <Banner />
      <Products ProductsDataPen={ProductsDataPen} handleAddProduct={handleAddProduct}handleRemoveProduct={handleRemoveProduct} />
    </div>
  )
}

export default pens
