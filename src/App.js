import logo from './logo.svg';
import './App.scss'
import  NavBar  from './components/NavBar/NavBar';
import React from 'react';
import Header from './container/Header/Header';
import Work from './container/Work/Work';
import About from './container/About/About';
import Youtube from './container/Youtube/Youtube';
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Youtube/>
    </div>
  );
}

export default App;
