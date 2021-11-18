import {
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [value, setValue] = useState("");
  console.log(value);
  useEffect(() => {
    fetch("https://young-peak-39049.herokuapp.com/infoReview")
      .then((res) => res.json())
      .then((result) => setReviews(result));
  }, []);
  return (
    <Box sx={{ flexGrow: 1, my: 5 }}>
      <Container>
        <Typography sx={{ marginBottom: "10px" }} variant="h3">
          Our Client Feedback
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {reviews?.map((review, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: "400px" }}>
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    borderRadius: "50px",
                    margin: "auto",
                  }}
                >
                  <img src={review?.img} alt="" />
                </Box>
                <CardContent>
                  <Typography sx={{ margin: 5 }} variant="h6" component="div">
                    {review?.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {review?.description}
                  </Typography>
                  <Typography>
                    <Rating
                      name="simple-controlled"
                      value={review?.rating}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
