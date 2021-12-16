import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { setActiveCrumb } from '../../../store/crumb/crumb'

import classes from './Crumb.module.css'

const Crumb = ({ text }) => {
  const dispatch = useDispatch()
  const activeCrumb = useSelector(state => state.crumb.activeCrumb)
  const crumbClasses = activeCrumb===text? [ classes.Crumb, classes.Active ] : [ classes.Crumb ]

  return (
    <div className={crumbClasses.join(' ')} onClick={()=>{dispatch(setActiveCrumb(text))}}>
      { text }
    </div>
  );
};

export default Crumb;