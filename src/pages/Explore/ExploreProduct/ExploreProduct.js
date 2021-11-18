import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ExploreProducts from "../ExploreProducts/ExploreProducts";

const ExploreProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://young-peak-39049.herokuapp.com/addToProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ExploreProducts key={product.id} product={product}></ExploreProducts>
        ))}
      </Grid>
    </Container>
  );
};

export default ExploreProduct;
