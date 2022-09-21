import React from 'react';
import Banner from "../../components/body-container/banner/Banner";
import Products from "../../components/product-store/products-discount/Products";
function Discount({ProductsDataDiscount, handleAddProduct, handleRemoveProduct}) {


    return (
        <div className='container'>
            <Banner />
            <Products ProductsDataDiscount={ProductsDataDiscount} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
        </div>
    )
}

export default Discount;