import React, {useState} from 'react';

import classes from './NavIcon.module.css'

const NavIcon = ({src, alt, href, width, height, colorFilter}) => {
  
  const [ navIconColorFilter, setnavIconColorFilter ] = useState('')
  const [ iconClasses, setIconClasses ] = useState([classes.NavIcon])
  const filterStyle = {filter: navIconColorFilter}
  const navIconStyles = {width: width, height: height}

  const onMouseEnterHandler = () => {
    setnavIconColorFilter(colorFilter)
    setIconClasses([ classes.NavIcon, classes.NavIconBig ])
  }

  const onMouseLeaveHandler = () => {
    setnavIconColorFilter('')
    setIconClasses([ classes.NavIcon ])
  }

  return (
    <div className={iconClasses.join(' ')} style={navIconStyles}>
      <a href={href} target='_blank' rel="noreferrer">
        <img src={src} style={filterStyle} alt={alt}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}/>
      </a>
    </div>
  );
};

export default NavIcon;