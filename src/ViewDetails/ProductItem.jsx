import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const handleDetails = (details) => {
    console.log("handle details=>", details);
    navigate("/cardDetails", { state: details });
  };

  return (
    <Grid item xs={3} onClick={() => handleDetails(item)}>
      <img src={item.image} width="200px" height="200px" alt="" />
      <h3>{item.title.slice(0, 20) + "..."} </h3>
    </Grid>
  );
};

export default ProductItem;
