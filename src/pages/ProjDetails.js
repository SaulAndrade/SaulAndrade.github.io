import React from 'react';
import { useLocation } from 'react-router'

import classes from './ProjDetails.module.css'

const ProjDetails = () => {
  const location = useLocation()

  const mappedCrumbs = location.state.crumbs.sort()
  .map(crumb => {
    return <li key={`c-${location.state.id}-${crumb}`}>{crumb}</li>
  })

  return (
    <div className={classes.ProjDetails}>
      <h1>.{location.state.title}</h1>
      <hr></hr>
      <h2>{location.state.description}</h2>

      <div>Carrousel</div>

      <div className={classes.ShareRibbon}>Share Ribbon</div>
      
      <div className={classes.Content}>
        <h1>About</h1>
        <hr></hr>
        <h2>{location.state.about}</h2>
      </div>

      <div className={classes.Content}>
        <h1>Tech Spec</h1>
        <hr></hr>
        <h2>Relevant technologies present in this project.</h2>
        <ul>
          {mappedCrumbs}
        </ul>
      </div>

      <div className={classes.Content}>
        <h1>Source</h1>
        <hr></hr>
        <a href={location.state.gitHub} target='_blank' rel='noreferrer'>{location.state.gitHub}</a>
      </div>
    </div>
  );
};

export default ProjDetails;