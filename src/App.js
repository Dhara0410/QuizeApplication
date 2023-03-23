import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import {Navbar} from './component/Navbar';
import {Start} from './component/Start'
import {Quiz} from './component/Quiz'
function App() {
  return (
    <>
    <Navbar/>
    {/* <Quiz/> */}
    <div className='container'>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
    </Routes>
    </div>
    
    </>
  );
}

export default App;
