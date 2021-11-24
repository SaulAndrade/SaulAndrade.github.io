import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/about' element={ <AboutPage /> } />  
          <Route path='/projects' element={ <ProjectsPage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
          <Route path='/' element={ <AboutPage /> } />  
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
