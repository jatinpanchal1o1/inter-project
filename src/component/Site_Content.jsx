import React from "react";
import SearchBar from "./Containt/SearchBar";
import SelectTab from "./containt/SelectTab";
import ProductCard from "./containt/ProductCard";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Site_Content = () => {
  return (
    <div className="siteContainer">
      <div className="upperContainer">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="clickBar">
          <SelectTab />
        </div>
        <div className="mainContaner">
          <h2>Food</h2>
          <div>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <ProductCard />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site_Content;
