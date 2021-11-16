import React from 'react';
import { Container, Grid } from '@mui/material';
import LimitedProduct from './LimitedProduct/LimitedProduct';


const products = [
    {
        id: 1,
        name: 'Canon 800D',
        img: 'https://rickycell.com/wp-content/uploads/2020/11/CANON-800D-2.jpg',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla architecto doloremque sapiente neque ullam odit.',
        price: 125

    },
    {
        id: 2,
        name: 'Canon 800D',
        img: 'https://rickycell.com/wp-content/uploads/2020/11/CANON-800D-2.jpg',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla architecto doloremque sapiente neque ullam odit.',
        price: 125

    },
    {
        id: 3,
        name: 'Canon 800D',
        img: 'https://rickycell.com/wp-content/uploads/2020/11/CANON-800D-2.jpg',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla architecto doloremque sapiente neque ullam odit.',
        price: 125

    },
    {
        id: 4,
        name: 'Canon 800D',
        img: 'https://rickycell.com/wp-content/uploads/2020/11/CANON-800D-2.jpg',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla architecto doloremque sapiente neque ullam odit.',
        price: 125

    },
    {
        id: 5,
        name: 'Canon 800D',
        img: 'https://rickycell.com/wp-content/uploads/2020/11/CANON-800D-2.jpg',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla architecto doloremque sapiente neque ullam odit.',
        price: 125

    },
    {
        id: 6,
        name: 'Canon 800D',
        img: 'https://rickycell.com/wp-content/uploads/2020/11/CANON-800D-2.jpg',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla architecto doloremque sapiente neque ullam odit.',
        price: 125

    }
    
]
const Product = () => {
    return (
        <Container>
            <h2>this is Product</h2>
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