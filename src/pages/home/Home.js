import React from 'react';
// import Swiper from "../../components/body-container/swiper/Swiper";
import Products from "../../components/product-store/products-home/Products";
function Home({ProductsDataHome, handleAddProduct, handleRemoveProduct}) {
  

    return (
        <div className='container'>
            {/* <Swiper /> */}
            <Products ProductsDataHome={ProductsDataHome} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
        </div>
    )
}

export default Home;