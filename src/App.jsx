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

function App() {
  
  // Basic scrollspy effect (optional, better with a library like react-scrollspy, 
  // but for simplicity we rely on Bootstrap's native behavior if imported, 
  // or just simple anchor links which work by default)
  
  return (
    <div className="App">
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
