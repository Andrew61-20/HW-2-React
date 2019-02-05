import React from "react";
import Menu from "./Menu";
import { Link } from 'react-router-dom';


const MenuList = ({ menu }) => (
  <ul>
    {menu.map(el => (
      <li key={el.id}>
        
        <Link to={`/${el}`}>{el}</Link>
      </li>
    ))}
  </ul>
);

export default MenuList;
