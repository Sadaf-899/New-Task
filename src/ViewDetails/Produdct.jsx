import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { TextField, Avatar, Grid, Button } from "@mui/material";
import ProductItem from "./ProductItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Produdct = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [txt, setTxt] = useState("");
  const [cat, setCat] = useState("");

  const getApi = async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    setFiltData(result.data);
    setData(result.data);
    const cateData = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCatData(cateData.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toUpperCase().includes(txt.toUpperCase()) ||
        item.category.toUpperCase().includes(txt.toUpperCase())
    );
    setFiltData(filtered);
    setCat("");
  }, [txt]);

  useEffect(() => {
    const filtered = data.filter((item) => item.category === cat);
    setFiltData(filtered);
  }, [cat]);

  return (
    <Grid style={{ padding: "10px" }} container spacing={3}>
      <Grid item xs={1}>
        <img
          src="logo192.png"
          alt=""
          style={{ width: "60px", height: "60px" }}
        />
      </Grid>
      <Grid item xs={9}>
        <TextField
          value={txt}
          fullWidth
          onChange={(e) => setTxt(e.target.value)}
          variant="outlined"
          label="Search..."
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          sx={{ width: 60, height: 60 }}
          alt="Remy Sharp"
          src="download.png"
        />
      </Grid>
      <Grid item xs={1}>
        <AddShoppingCartIcon sx={{ fontSize: "50px" }} />
      </Grid>

      {catData.map((item) => (
        <Grid item xs={3}>
          <Button fullWidth variant="contained" onClick={() => setCat(item)}>
            {item}
          </Button>
        </Grid>
      ))}

      <Grid style={{ margin: "20px" }} container spacing={2}>
        {filtData.length > 0 &&
          filtData.map((item) => <ProductItem item={item} />)}
      </Grid>
    </Grid>
  );
};

export default Produdct;
