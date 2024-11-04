import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './App.css';
import Login from './page/Login';
import Trip from './page/Trip';
import User from './page/User';
import PrivateRoute from './components/Protected Route/Protected';
import Schedule from './page/Schedule/Schedule';
import UserFAQ from './page/UserFAQ/UserFAQ';
import Setting from './page/Setting/Setting';
import Test1 from './page/Test1';
import Join from './page/JoinPage/JoinStep1/Join';
import JoinStep2 from './page/JoinPage/JoinStep2/JoinStep2';
import WeatherApp from './page/WeatherPage/WeatherApp';
import RouteMap from './page/MapPage/kakaomap.js';



const App = () => {
    const origin = { lat: 37.5665, lng: 126.9780 };  // 서울 좌표 (예시)
    const destination = { lat: 37.5550, lng: 126.9707 };  // 도착지 좌표 (예시)
    const waypoints = [
      { lat: 37.5610, lng: 126.986 },  // 경유지 1 (예시)
    ];
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Trip' element={<Trip />} />
                {/* <Route path='/User' element={
                     <PrivateRoute> <User /></PrivateRoute>}/>   */}
                <Route path='/User' element= {<User/>} /> 
                <Route path='/User/FAQ' element={<UserFAQ/>} />
                <Route path='/User/Schedule' element={<Schedule/>}/>    
                <Route path='/User/Setting' element={<Setting/>}/>
                <Route path='/Join' element={<Join />} />
                <Route path='/Join/step2' element={<JoinStep2 />} />
                <Route path='/Weather' element={<WeatherApp />} />
                <Route path='/Test1' element={<Test1 />} />
                <Route 
                    path="/api/kakao" 
                    element={<RouteMap origin={origin} destination={destination} waypoints={waypoints} />} 
                />

            </Routes>
        </Router>
    );
}

export default App;