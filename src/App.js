import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route, useLocation}  from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Skills from './Pages/skills';
import Portfolio from './Pages/portfolio';
import Navbar from './comp/navebar';
import Background from './utils/Background';


function App() {

  const location = useLocation();
  const renderHome = location.pathname === "/";
  

  return (
    <div className="App">
    {
      renderHome &&
      <Background/>
    }

    <Navbar/>

    <div className="App__main-page-content">
    <BrowserRouter basename="/port">
      <Routes>
        <Route index path='/port'element={<Home/>} />
        <Route  path='/about'element={<About/>} />
        <Route  path='/skills'element={<Skills/>} />
        <Route  path='/portfolio'element={<Portfolio/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
      
    </div>
  );
}

export default App;
