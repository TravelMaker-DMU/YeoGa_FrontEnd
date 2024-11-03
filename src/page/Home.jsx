import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import GridLayout from '../components/GridLayout';
import TripCourse from '../components/TripCourse';
import Footer from '../components/Footer/Footer';




const Home = () => {

    
    return (
        <div className="home">
            <Navbar />
            <ImageSlider/>
    
             <GridLayout/>
            <TripCourse/>
            <Footer/>
        </div>

    );
}

export default Home;