import React from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import ChooseUs from '../ChooseUs/ChooseUs';
import Gallery from '../Gallery/Gallery';
import Articles from '../Articles/Article';
import Testmonial from './../Testmonial/Testmonial';
import UsedCarCity from '../UsedCarCity/UsedCarCity';
import Upcomming from '../Upcomming/Upcomming';
import Contract from './Contract/Contract';





const Home = () => {
    return (
        <div className='mx-5'>
            <Carousel></Carousel>
            <Categories></Categories>
            <Upcomming></Upcomming>
            <Articles></Articles>
             <Testmonial></Testmonial>
            <ChooseUs></ChooseUs>
            <About></About>
            <UsedCarCity></UsedCarCity>
            <Gallery></Gallery>
            <Contract />
        </div>
    );
};

export default Home;