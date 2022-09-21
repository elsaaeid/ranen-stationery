import React from 'react';
import Banner from "../../components/body-container/banner/Banner";
import Products from "../../components/product-store/products-brands/Products";

const CommercialBrands = ({ProductsDataBrands, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div className='container'>
      <Banner />
      <Products ProductsDataBrands={ProductsDataBrands} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
    </div>
  )
}

export default CommercialBrands;
