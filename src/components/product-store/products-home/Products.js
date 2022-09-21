import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import '../style.css';


const Products = ({ProductsDataHome, handleAddProduct, handleRemoveProduct}) => {
  

  return (
    <main className="contentHome">
      <div className="row toolbarHome">
      <h2 className='col'>Home</h2>
      </div>
      <Grid container justifyContent="center" spacing={4}>
        {ProductsDataHome.map((item) => (
          <Grid key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Product item={item} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

