import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import MenuCardExt from './MenuCardExt'


const MenuItem = ({ items }) => 
  {items.map(item => (
    <div key={item.id}>
      <Link to={`${routes.MENU}/${item.id}`}>
        <MenuCardExt {...item} />
      </Link>
    </div>
  ))}

export default MenuItem;