import React from 'react';

import classes from './Thumb.module.css'

const Thumb = ({projData}) => {

    const mappedCrumbs = projData.crumbs.slice(0,5).map(text=>{
      return <div className={classes.Crumb} key={`${projData.id}-${text}`}>{text}</div>
    })

    return (
      <div className={classes.Thumb}>
        <div className={classes.TitleContainer}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>{projData.title}</div>
        </div>

        <div className={classes.ImageContainer}>
          <div className={classes.Backdrop}></div>
          <div className={classes.Crumbs}>
            {mappedCrumbs}
          </div>
          <div className={classes.More}>more...</div>
          <img src={projData.images[0]} />
          <img src={projData.images[1]} />
        </div>
      </div>
    )
};

export default Thumb; 