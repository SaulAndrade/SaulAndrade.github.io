import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import icon from '../../img/person-digging-solid.svg'

import classes from './Backdrop.module.css'

const Backdrop = () => {

  const [show, setShow] = useState(true);

  const hideBackdropHandler = () => {
    setShow(false);
  }

  const appliedClasses = show ? [classes.Backdrop, classes.Open] 
  : [classes.Backdrop]

  return ReactDOM.createPortal(
    <div onClick={hideBackdropHandler} className={appliedClasses.join(' ')}>

      <div className={classes.ImgContainer}>
        <img src={icon} alt='Under Construction'/>
      </div>

      <div className={classes.Container}>
        <p className={classes.BuildingText}>
          Under Construction
        </p>

        <p className={classes.BuildingText}>
          Click anywhere to browse
        </p>
      
        <a href="https://github.com/SaulAndrade/SaulAndrade.github.io"
        className={classes.LinkText}>
          visit the source code here
        </a>
      </div>

    </div>
  ,document.getElementById('root'));

};

export default Backdrop;