import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer'
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Product from '../Product/Product/Product';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Product></Product>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;