import React from 'react';
import Banner from "../../components/body-container/banner/Banner";
import Products from "../../components/product-store/products-bags/Products";
const SchoolBags = ({ProductsDataBags, handleAddProduct, handleRemoveProduct}) => {
    return (
        <div className='container'>
            <Banner />
            <Products ProductsDataBags={ProductsDataBags} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
        </div>
    )
}

export default SchoolBags
