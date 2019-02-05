import React from "react";

const Menu = ({ name, image, price,alt }) => (
  <div className="product">
    <h2 className="name"> {name}</h2>
      <img className="image" src={image} alt={alt} width="200px" />
    <p className="price">{price} UAH</p>
   </div>
);

export default Menu;
