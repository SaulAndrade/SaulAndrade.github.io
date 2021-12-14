import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Curtain from '../Curtain/Curtain';
import { toggle } from '../../store/bButton/bButton'

const BurguerButton = () => {
  const buttonClasses = useSelector(state=>state.bButton.buttonClasses)
  const buttonActive = useSelector(state=>state.bButton.buttonActive)
  const dispatch = useDispatch()

  console.log(buttonClasses)
  return (
    <React.Fragment>
      <Curtain show={ buttonActive } />

      <div className={buttonClasses.join(' ')} onClick={()=>{dispatch(toggle())}}> 
        <span></span>
        <span></span>
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default BurguerButton;