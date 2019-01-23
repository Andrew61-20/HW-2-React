import React from "react";
// import v4 from "uuid/v4";

const Menu = ({ name, image, price,alt }) => (
  <div className="product">
    <h2 className="name"> {name}</h2>
    {/* <p className="description"> {description}</p> */}
    <img className="image" src={image} alt={alt} width="200px" />
    <p className="price">{price} UAH</p>
    {/* {ingredients.map((el, idx) => (
      <p key={v4()} className="ingredientList">
        - {el}
      </p>
    ))} */}
  </div>
);

export default Menu;
