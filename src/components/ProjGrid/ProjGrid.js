import React from 'react';

import Thumb from './Thumb/Thumb';

import classes from './ProjGrid.module.css'

const ProjGrid = ({portfolioData}) => {
  const mappedPortfolio = portfolioData.map(projData => {
    return (
      <Thumb projData={projData} key={projData.id} />
    )
  })

  return (
    <div className={classes.ProjGrid}>
      {mappedPortfolio}
    </div>
  );
};

export default ProjGrid;