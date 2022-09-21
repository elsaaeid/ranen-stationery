import React from 'react'
import Products from "../../components/product-store/products-arts/Products";
import Banner from "../../components/body-container/banner/Banner";


const ArtistTools = ({ProductsDataArts, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div className='container'>
      <Banner />
      <Products ProductsDataArts={ProductsDataArts} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
    </div>
  )
}

export default ArtistTools
