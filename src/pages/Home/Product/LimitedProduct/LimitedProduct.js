import { Grid } from '@mui/material';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import MuiButton from '../../../../styleComponent/ButtonStyle';


const LimitedProduct = ({product}) => {
    const {name, img, description, price} = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={img}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {description}
                </Typography>
                <Typography variant="h4" >
                  $ {price}
                </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
             <MuiButton variant="contained"> BUY NOW </MuiButton>
            
            </CardActions>
        </Grid>
    );
};

export default LimitedProduct;