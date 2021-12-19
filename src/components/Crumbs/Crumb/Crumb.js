import React from 'react';

import classes from './Crumb.module.css'

const Crumb = ({ text, activeCrumb, setFilter }) => {
  const crumbClasses = activeCrumb===text? [ classes.Crumb, classes.Active ] : [ classes.Crumb ]

  return (
    <div className={crumbClasses.join(' ')} onClick={()=>{setFilter(text)}}>
      { text }
    </div>
  );
};

export default Crumb;