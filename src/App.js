import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
// import About from './pages/About';
import Login from './page/Login';
import Trip from './page/Trip';
import User from './page/User';
import './App.css';

const App = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path='/Login' element={<Login />} />
                <Route path='/Trip' element={<Trip />} />
                <Route path='/User' element={<User />} />
            </Routes>
        </Router>
    );
}

export default App;