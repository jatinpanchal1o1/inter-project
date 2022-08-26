import React from "react";
import SearchBar from "../component/containt/SearchBar";
import SelectTab from "../component/containt/SelectTab";
import ProductCard from "../component/containt/ProductCard";
import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

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
              style={{ justifyContent: "center" }}
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={3} sm={4} md={4} key={index}>
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
