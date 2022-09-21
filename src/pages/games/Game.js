import React from 'react';
import Banner from "../../components/body-container/banner/Banner";
import Products from "../../components/product-store/products-games/Products";
function Games({ProductsDataGame, handleAddProduct, handleRemoveProduct}) {


    return (
        <div className='container'>
            <Banner />
            <Products ProductsDataGame= {ProductsDataGame} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
        </div>
    )
}

export default Games;