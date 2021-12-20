import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import classes from './ActionCurtain.module.css'

const ActionCurtain = ({text}) => {
  const [ aCurtainClasses, setACurtainClasses ] = useState([classes.ActionCurtain])
  const [ barClasses, setBarClasses ]  = useState('')
  const [ aTextClasses, setATextClasses ] = useState([classes.ActionText])

  const activateEffect = () => {
    setACurtainClasses([classes.ActionCurtain])
    setBarClasses(classes.ShowSlider)
    setATextClasses([classes.ActionText, classes.ShowText])
  }

  const deactivateEffect = () => {
    setBarClasses('')
    setATextClasses([classes.ActionText])
    //needs to wait for the other animations to play before getting rid of the container
    setTimeout(()=>{setACurtainClasses([classes.ActionCurtain, classes.Obliterate]) }, 300)
  }

  useEffect(()=>{
    activateEffect()
    const timedEffect = setTimeout(()=>{deactivateEffect()},1000)
    return ()=>{clearTimeout(timedEffect)}
  }, [text])

  return ReactDOM.createPortal(
    <div className={aCurtainClasses.join(' ')}>
      <div className={barClasses}></div>
      <div className={aTextClasses.join(' ')}>{text}</div>
      <div className={barClasses}></div>
    </div>
  , document.getElementById('root'));
};

export default ActionCurtain;