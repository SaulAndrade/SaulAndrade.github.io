import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import ProjDetails from './pages/ProjDetails'
import ContactPage from './pages/Contact'

//temporarily added to indicate portfolio is under construction
import Backdrop from './components/Backdrop/Backdrop'

function App() {
  return (
      <Layout>
        <Backdrop />
        <Routes>
          <Route path='*' element={ <Navigate to='/'/> } />  
          <Route path='/' element={ <AboutPage /> } />  
          <Route path='/projects' element={ <ProjectsPage /> } />
          <Route path='/projects/:title' element={ <ProjDetails /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
      </Layout>
  );
}

export default App;
