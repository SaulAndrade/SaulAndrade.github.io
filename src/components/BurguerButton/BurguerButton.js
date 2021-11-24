import React, { useState } from 'react';

import Curtain from '../Curtain/Curtain';

import classes from './BurguerButton.module.css'

const BurguerButton = () => {
  const [ buttonClasses, setButtonClasses ] = useState([ classes.BurguerButton ])
  const [ buttonActive, setButtonActive ] = useState (false)

  const toggleButtonHandler = () => {
    if (buttonClasses.includes(classes.ButtonActive)){
      setButtonClasses([classes.BurguerButton])
      setButtonActive(false)
      return
    }
    setButtonClasses([ classes.BurguerButton, classes.ButtonActive ])
    setButtonActive(true)
}

  return (
    <React.Fragment>
      <Curtain show={ buttonActive }/>

      <div className={buttonClasses.join(' ')} onClick={toggleButtonHandler}> 
        <span></span>
        <span></span>
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default BurguerButton;