import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ActionCurtain from '../components/ActionCurtain/ActionCurtain'
import Crumbs from '../components/Crumbs/Crumbs'
import ProjGrid from '../components/ProjGrid/ProjGrid'
import portfolioData, { crumbs } from '../portfolioData/portfolio'
import classes from './Projects.module.css'

const Projects = () => {
  const filter = useSelector(state=>state.crumb.activeCrumb)
  let filteredPortfolio = filter? portfolioData.filter(proj => proj.crumbs.includes(filter)) : portfolioData

  return (
    <div className={classes.Projects}>
      <ActionCurtain text={filter?`FILTERING ${filter.toUpperCase()} PROJECTS` : 'ALL PROJECTS'} />

      <h1>.web developer portfolio</h1>

      <h2>Cool experiments, from Game Cloning to Web Components and UI/UX animations. 
        Check out my source code and resources at my 
        &nbsp;<a target='_blank' rel='noreferrer' href='https://github.com/SaulAndrade'>GitHub</a> page.
      </h2>

      <Crumbs crumbList={crumbs} />

      <ProjGrid portfolioData={filteredPortfolio} />
      
      <div className={classes.CallToAct}>
        <h3>Got a project?</h3>
        <p>You can reach me at saul.a.andrade@gmail.com</p>
        <p>or just visit the&nbsp;<Link to='/contact'>contact</Link> page</p>
      </div>
    </div>
  );
};

export default Projects;