import React from 'react';

const MenuCardExt = ({ name, image, price, description, ingredients}) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}</p>
    <p>Description: {description}</p>
    <h5>Ingredients</h5>
    <p>{ingredients}</p>
  </div>
);

export default MenuCardExt;