import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Container, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const OrderPlace = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const [product, setProduct] = useState({});
  const { name, description, price, img } = product;
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://young-peak-39049.herokuapp.com/addToProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const onSubmit = (data) => {
    data.name = name;
    fetch("https://young-peak-39049.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    reset();
  };

  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <h1>this is Order Place</h1>
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
                <Typography variant="h4">{name}</Typography>
                <Typography variant="h6">Price: ${price}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={12} md={6} className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={user?.displayName}
                {...register("name", { required: true })}
                placeholder="Name"
              />
              <input
                value={user?.email}
                {...register("email")}
                placeholder="Email"
              />
              <input type="text" {...register("city")} placeholder="City" />
              <input
                type="text"
                {...register("country")}
                placeholder="Country"
              />
              <input type="number" value={price} {...register("price")} />
              <input type="submit" />
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default OrderPlace;
