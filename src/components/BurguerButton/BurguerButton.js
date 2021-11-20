import React, { useState } from 'react';

import classes from './BurguerButton.module.css'

const BurguerButton = () => {
  const [ buttonClasses, setButtonClasses ] = useState([ classes.BurguerButton ])
  const [ buttonActive, setButtonActive ] = useState (false)
  const [ buttonHovered, setButtonHovered ] = useState(false)

  const toggleButtonHandler = () => {
    if (buttonClasses.includes(classes.ButtonActive)){
      setButtonClasses([classes.BurguerButton])
      setButtonActive(false)
      return
    }
    setButtonClasses([ classes.BurguerButton, classes.ButtonActive ])
    setButtonActive(true)
}

  const spanBaseClass = buttonHovered ? classes.SpanHovered : classes.Span
  

  return (
    <div className={buttonClasses.join(' ')} 
    onClick={toggleButtonHandler} 
    onMouseEnter={()=>setButtonHovered(true)}
    onMouseLeave={()=>setButtonHovered(false)}>
      <span className={buttonActive?classes.SpanActiveTop:spanBaseClass}></span>
      <span className={buttonActive?classes.SpanActiveMiddle:spanBaseClass}></span>
      <span className={buttonActive?classes.SpanActiveBottom:spanBaseClass}></span>
    </div>
  );
};

export default BurguerButton;