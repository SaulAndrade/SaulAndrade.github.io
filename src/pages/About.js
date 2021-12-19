import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../img/avatarSaul.jpeg'
import classes from './About.module.css'

const About = () => {
  return (
    <div className={classes.About}>
      <h1>.about</h1>
      <div className= {classes.InfoCard}>

        <div className={classes.TextContainer}>
          <div>
            <h2>Full-stack web developer based in Ottawa/ON, Canada.</h2>
            <p>I am a full-stack web developer working mainly with ReactJS, GraphQL and MongoDB.</p>
            <p>Check out my Portfolio at the <Link to='/projects'>projects</Link> page.
              There's a lot of interesting stuff there, including the source code for this
              very own website.</p>
            <p>If you want to get in touch, just visit the&nbsp;
              <Link to='/contact'>contact</Link> page or send a message to saul.a.andrade@gmail.com</p>
          </div>
          <h2>Saul Andrade.</h2>
        </div>

        <div className={classes.AvatarContainer}>
          <img src={avatar} alt='Saul Andrade'/>
        </div>
      </div>
    </div>
  );
};

export default About;