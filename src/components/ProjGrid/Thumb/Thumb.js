import React from 'react';
import { Link } from 'react-router-dom'

import classes from './Thumb.module.css'

const CRUMB_LIMIT = 8

const Thumb = ({projData}) => {
    const sortedCrumbs = projData.crumbs.sort()

    const slicedCrumbs = (sortedCrumbs.length > CRUMB_LIMIT)? sortedCrumbs.slice(0,CRUMB_LIMIT-1) 
    :sortedCrumbs

    const mappedCrumbs = slicedCrumbs.map(text=>{
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
            <Link to={projData.title.split(' ').join('-').toLowerCase()} state={projData}/>
            <div className={classes.Backdrop}></div>
            <div className={classes.Crumbs}>
              {mappedCrumbs}
            </div>
            <div className={classes.More}>more...</div>
            <img alt='cover' src={projData.images[0]} />
            <img alt='extra' src={projData.images[1]} />
          </div>
        </div>
    )
};

export default Thumb; 