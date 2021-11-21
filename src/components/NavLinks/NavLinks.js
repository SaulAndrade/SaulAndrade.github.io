import React from 'react';

import NavLink from './NavLink/NavLink'

import classes from './NavLinks.module.css'

const NavLinks = ({size, spacing}) => {
  return (
    <div className={classes.NavLinks}>
      <NavLink size={size} spacing={spacing}>Home</NavLink>
      <NavLink size={size} spacing={spacing}>Projects</NavLink>
      <NavLink size={size} spacing={spacing}>Contact</NavLink>
    </div>
  );
};

export default NavLinks;