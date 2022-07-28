import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Strategy from './Pages/2021-2025-SP/Strategy'
import Progress from './Pages/Progress/Progress'
import Downloads from './Pages/DownloadCenter/Downloads'
import Blog from './Pages/Blog/Blog'
import Single from './Pages/Single/Single'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path='/2021-2025-SP' element={<Strategy/>}/>
          <Route exact path='/Progress' element={<Progress/>}/>
          <Route exact path='/Downloads' element={<Downloads/>}/>
          <Route exact path='/Blog/:id' element={<Single/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
