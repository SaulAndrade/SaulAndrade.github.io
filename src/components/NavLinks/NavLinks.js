import React from 'react';

import NavLink from './NavLink/NavLink'

import classes from './NavLinks.module.css'

const NavLinks = ({size, spacing}) => {
  return (
    <div className={classes.NavLinks}>
      <NavLink to='about' size={size} spacing={spacing}>About</NavLink>
      <NavLink to='projects' size={size} spacing={spacing}>Projects</NavLink>
      <NavLink to='contact' size={size} spacing={spacing}>Contact</NavLink>
    </div>
  );
};

export default NavLinks;