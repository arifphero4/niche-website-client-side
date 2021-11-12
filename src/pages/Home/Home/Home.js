import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

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