import React from 'react';
import ReactDOM from 'react-dom';

import NavLinks from '../NavLinks/NavLinks';
import NavIcons from '../NavIcons/NavIcons';

import classes from './Curtain.module.css'

const Curtain = ({show}) => {

  const curtainClasses = show ? [ classes.Curtain, classes.Open ] : [ classes.Curtain ]

  return ReactDOM.createPortal(
    <div className={curtainClasses.join(' ')}>

      <div className={classes.MenuContainer}>
        <NavLinks size='3rem' spacing='.25rem' />
      </div>

      <div className={classes.SocialMediaContainer}>
        <NavIcons width='5rem' height='5rem'/>
      </div>

    </div>
  ,document.getElementById('root'));
};

export default Curtain