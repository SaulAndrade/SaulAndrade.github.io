import React from 'react';
import { NavLink as NL} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deactivate } from '../../../store/bButton/bButton'

import classes from './NavLink.module.css'

const NavLink = ({to, size, spacing, children}) => {
  const fontStyles = {fontSize: size, letterSpacing: spacing}
  const dispatch = useDispatch()

  return (
    <div className={classes.NavLink} style={fontStyles} onClick={()=>{dispatch(deactivate())}}>
      <NL to={to} style={({isActive}) => isActive ? {color:'red'} : undefined} >
        {children}
      </NL>
    </div>
  );
};

export default NavLink;