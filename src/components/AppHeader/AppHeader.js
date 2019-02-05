import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
// import UserMenu from '../../modules/user/UserMenu/UserMenu';

import appLogo from './assets/logo.png';
// import avatar from './assets/photo.jpg';
import navItems from '../../configs/main-nav';

// import s from './AppHeader.module.css';

const AppHeader = () => (
  <header>
    <div>
      <Logo image={appLogo} width={80} height={80} />
    </div>
    <Navigation items={navItems} />
    <div>
      {/* <UserMenu avatar={avatar} name="Bob Ross" /> */}
    </div>
  </header>
);

export default AppHeader;


