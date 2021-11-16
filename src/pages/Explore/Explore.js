import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ExploreProduct from './ExploreProduct/ExploreProduct';

const Explore = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 style={{textAlign:'center'}}>Explore All Brands!</h1>
            <ExploreProduct></ExploreProduct>
            <Footer></Footer>
        </div>
    );
};

export default Explore;