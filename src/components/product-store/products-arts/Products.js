import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import '../style.css';


const Products = ({ProductsDataArts, handleAddProduct, handleRemoveProduct}) => {


  return (
    <main className="contentBody">
      <div className="row toolbar">
        <h2 className='col'>arts tools</h2>
      </div>
      <Grid className='row' container justifyContent="center" spacing={4}>
        {ProductsDataArts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

