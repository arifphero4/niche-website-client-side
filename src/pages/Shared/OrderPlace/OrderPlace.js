import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Container, Grid } from "@mui/material";



const OrderPlace = () => {
    const {user} = useAuth();
  const { register, handleSubmit } = useForm();
  
  const [product, setProduct] = useState({});
  const { name, description, price, img } = product;
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/addToProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const onSubmit = (data) =>{
      data.name=name;
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(data) 
    })
        .then(res => res.json())
        .then(data => console.log(data) )
        
  };
  

  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            
            <CardMedia
              component="img"
              height="300"
              image={img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="h4" >
                {name}
              </Typography>
              <Typography variant="h6" >
                 Price: ${price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item sx={12} md={6} className="add-service">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input value={user?.displayName }
              {...register("name", { required: true})}
              placeholder="Name"
            />
            <input  value={user?.email } {...register("email",  )} placeholder="Email"/>
            <input type="text" {...register("city" )} placeholder="City" />
            <input type="text" {...register("country" )}  placeholder="Country"/>
            <input type="submit" />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderPlace;
