import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './App.css';
// import About from './pages/About';
import Login from './page/Login';
import Trip from './page/Trip';
import User from './page/User';
import UserFAQ from './page/UserFAQ/UserFAQ';
import Join from './page/JoinPage/Join';
import Test1 from './page/Test1';
import JoinStep2 from './page/JoinPage/JoinStep2';
import WeatherApp from './page/WeatherPage/WeatherApp';

const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path='/Login' element={<Login />} />
                <Route path='/Trip' element={<Trip />} />
                <Route path='/User' element={<User />} />
                <Route path='/User/FAQ' element={<UserFAQ/>} />
                <Route path='/Join' element={<Join />} />
                <Route path='/Join/step2' element={<JoinStep2 />} />
                <Route path='/Weather' element={<WeatherApp />} />
                <Route path='/Test1' element={<Test1 />} />

            </Routes>
        </Router>
    );
}

export default App;