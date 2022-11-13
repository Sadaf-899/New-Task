import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, Grid } from "@mui/material";

const ProductDetail = () => {
  const dataReceived = useLocation();
  const data = dataReceived.state;
  const navihome = useNavigate();

  const handleback = () => {
    navihome("/");
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <img
          style={{ margin: "70px" }}
          src={data.image}
          width="450px"
          height="450px"
          alt=""
        />
      </Grid>
      <Grid style={{ marginTop: "150px" }} item xs={4}>
        <h1>{data.title} </h1>
        <h1>Rs.{data.price} </h1>
        <h4>{data.description} </h4>
        <Button variant="contained" style={{ margin: "5px" }}>
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          onClick={handleback}
          style={{ margin: "5px" }}
        >
          Back to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
