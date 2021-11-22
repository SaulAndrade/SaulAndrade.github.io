import React from 'react'

import BurguerButton from '../BurguerButton/BurguerButton'
import NavLinks from '../NavLinks/NavLinks'
import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../img/logo.png'
import classes from './Layout.module.css'

const Layout = ({children}) => {

  return (
    <div className={classes.Layout}>
      <nav>
        <div className={classes.LogoContainer}>
          <img src={Logo} alt="Saul's awesome Portfolio"/>
        </div>

        <div className={classes.Navbar}>
          <div className={classes.Links}>
            <NavLinks size='1rem' spacing='.25rem'/>
          </div>

        <div className={classes.SocialMediaContainer}>
            <NavIcons width='3rem' height='3rem'/>
          </div>
        </div>
        
        <div className={classes.BurguerButtonContainer}>
          <BurguerButton />
        </div>
      </nav>

      <div className={classes.Content}>
        {children}
      </div>

    </div>
  );
};

export default Layout;