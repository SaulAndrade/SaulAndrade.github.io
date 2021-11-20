import React from 'react'

import BurguerButton from '../BurguerButton/BurguerButton';

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
          <div className={classes.NavLinks}>
            <div>Home</div>
            <div>Resumé</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>

          <div className={classes.SocialMediaContainer}>
            <div>LinkedIn</div>
            <div>GitHub</div>
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