import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='*' element={ <Navigate to='/'/> } />  
          <Route path='/' element={ <AboutPage /> } />  
          <Route path='/projects' element={ <ProjectsPage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
      </Layout>
  );
}

export default App;
