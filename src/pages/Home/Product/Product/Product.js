import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import LimitedProduct from '../LimitedProduct/LimitedProduct';




const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/limitProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    return (
        <Container sx={{my:5}}>
            <h2 style={{textAlign:'center'}}>Top Branded Cameras</h2>
            <Grid container spacing={2}>
               {
                   products.map(product => <LimitedProduct
                        key={product.id}
                        product={product}
                   >      
                   </LimitedProduct>)
               }

            </Grid>
        </Container>
    );
};

export default Product;