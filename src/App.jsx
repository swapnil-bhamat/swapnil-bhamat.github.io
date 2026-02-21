import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import './scss/main.scss';

import { Helmet } from 'react-helmet-async';
import { profile } from './data/profile';

function App() {
  const { name, role, summary } = profile;
  
  return (
    <div className="App">
       <Helmet>
         <title>{name} - {role}</title>
         <meta name="description" content={summary.substring(0, 160)} />
         <meta name="keywords" content="Software Architect, Staff Engineer, Distributed Systems, Cloud Native, React, Swapnil Bhamat" />
         <meta property="og:title" content={`${name} - Portfolio`} />
         <meta property="og:description" content={summary.substring(0, 160)} />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={`${name} - Portfolio`} />
         <meta name="twitter:description" content={summary.substring(0, 160)} />
       </Helmet>
       <Sidebar />
       <div className="container-fluid p-0">
           <About />
           <hr className="m-0" />
           <Experience />
           <hr className="m-0" />
           <Projects />
           <hr className="m-0" />
           <Education />
           <hr className="m-0" />
           <Skills />
           <hr className="m-0" />
           <Interests />
           <hr className="m-0" />
           <Awards />
       </div>
    </div>
  );
}

export default App;
