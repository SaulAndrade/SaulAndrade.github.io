import React from 'react';

import classes from './NavLink.module.css'

const NavLink = ({size, spacing, children}) => {
  const fontStyles = {fontSize: size, letterSpacing: spacing}

  return (
    <div className={classes.NavLink} style={fontStyles}>
      {children}
    </div>
  );
};

export default NavLink;