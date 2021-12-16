import React from 'react';
import { useSelector } from 'react-redux';

import Crumb from './Crumb/Crumb';

import classes from './Crumbs.module.css'

const Crumbs = () => {
  const crumbList = useSelector(state => state.crumb.crumbs)
  const mappedCrumbList = Object.keys(crumbList)
    .map(key => <Crumb text={crumbList[key]} key={key}/>)

  return (
    <div className={classes.Crumbs}>
      {mappedCrumbList}
    </div>
  );
};

export default Crumbs;