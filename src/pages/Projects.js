import React from 'react';
import { Link } from 'react-router-dom'

import Crumbs from '../components/Crumbs/Crumbs';

import classes from './Projects.module.css'

const Projects = () => {
  return (
    <div className={classes.Projects}>

      <h1>.web developer portfolio</h1>

      <h2>Cool experiments, from Game Cloning to Web Components and UI/UX animations. 
        Check out my source code and resources at my 
        &nbsp;<a target='_blank' rel='noreferrer' href='https://github.com/SaulAndrade'>GitHub</a> page.
      </h2>

      <Crumbs />

      <div>Projects List</div>
      
      <div className={classes.CallToAct}>
        <h3>Got a project?</h3>
        <p>You can reach me at saul.a.andrade@gmail.com</p>
        <p>or just visit the&nbsp;<Link to='/contact'>contact</Link> page</p>
      </div>
    </div>
  );
};

export default Projects;