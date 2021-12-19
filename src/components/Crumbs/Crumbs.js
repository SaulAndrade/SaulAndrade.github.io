import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { setActiveCrumb } from '../../store/crumb/crumb'
import Crumb from './Crumb/Crumb';

import classes from './Crumbs.module.css'

const Crumbs = ({crumbList}) => {
  const dispatch = useDispatch()
  const activeCrumb = useSelector(state => state.crumb.activeCrumb)

  const setFilter = (filter) => {
    dispatch(setActiveCrumb(filter))
  }

  const mappedCrumbList = Object.keys(crumbList)
  .map(key => <Crumb 
                text={crumbList[key]} 
                activeCrumb={activeCrumb}
                setFilter = {setFilter}
                key={key}/>
  )

  return (
    <div className={classes.Crumbs}>
      {mappedCrumbList}
      <button onClick={()=>{setFilter('')}}>all</button>
    </div>
  );
};

export default Crumbs;