import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Mission from './components/Mission'
import Planned from './components/Planned'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Mission"} element={<Mission />} />
          <Route path={'/Planned'} element={<Planned/>} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
    </Router>
    </>
  )
}

export default App