import React from 'react';
import Header from '../Layout/Header';
import ImageSlider from '../components/ImageSlider';
import GridLayout from '../components/GridLayout';
import TripCourse from '../components/TripCourse';
import Footer from '../components/Footer/Footer';




const Home = () => {

    
    return (
        <div className="home">
            <Header />

            <ImageSlider/>
    
             <GridLayout/>
            <TripCourse/>
            <Footer/>
        </div>

    );
}

export default Home;