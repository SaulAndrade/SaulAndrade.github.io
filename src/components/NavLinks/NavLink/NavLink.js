import React from 'react';
import { useDispatch } from 'react-redux'

import { deactivate } from '../../../store/bButton/bButton'

import classes from './NavLink.module.css'

const NavLink = ({size, spacing, children}) => {
  const fontStyles = {fontSize: size, letterSpacing: spacing}
  const dispatch = useDispatch()

  return (
    <div className={classes.NavLink} style={fontStyles} onClick={()=>{dispatch(deactivate())}}>
      {children}
    </div>
  );
};

export default NavLink;