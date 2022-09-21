import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import '../../style.css';


const Product = ({ item, handleAddProduct }) => {
  const { name, image, description, price } = item;
  
  return (
    <Card className="root">
      <CardMedia className="media" image={image} title={name} />
      <CardContent>
        <div className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart 
          onclick={() => handleAddProduct(item)} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

