import React from 'react';

import NavIcon from './NavIcon/NavIcon'

import ghSVG from '../../img/github-alt-brands.svg'
import inSVG from '../../img/linkedin-brands.svg'
import classes from './NavIcons.module.css'


const SVGwhite = "invert(100%) sepia(100%) saturate(0%) hue-rotate(302deg) brightness(103%) contrast(103%)"
const SVGinBlue = "invert(31%) sepia(49%) saturate(2601%) hue-rotate(178deg) brightness(89%) contrast(101%)"

const NavIcons = ({width, height}) => {

  return (
    <div className={classes.NavIcons} >
      <NavIcon src={ghSVG} width={width} height={height} colorFilter={SVGwhite} 
      href='https://github.com/SaulAndrade'
      alt="Saul's GitHub page"
      />
      
      <NavIcon src={inSVG} width={width} height={height} colorFilter={SVGinBlue} 
      href='https://www.linkedin.com/in/saul-andrade-34532515'
      alt="Saul's LinkedIn page"
      />
    </div>
  );
};

export default NavIcons;