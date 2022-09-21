import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import '../../style.css';


const Product = ({ product, handleAddProduct }) => {

  return (
    <Card className="col">
      <CardMedia className="media" image={product.image} title={product.name} />
      <CardContent>
        <div className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart onClick={() => handleAddProduct(product)} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

