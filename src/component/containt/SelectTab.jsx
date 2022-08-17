import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// const sxStyle = {
//   paddingTop: 2,
//   fontFamily: "Arial",
// };

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        // sx={sxStyle}
        // textColor="secondary"
        // indicatorColor="secondary"
        TabIndicatorProps={{
          style: { background: "#5541D7", paddingTop: 2 },
        }}
        variant="fullWidth"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="All" />
        <Tab value="two" label="Food" />
        <Tab value="three" label="Drink" />
        <Tab value="four" label="Snack" />
        <Tab value="five" label="Packages" />
      </Tabs>
    </Box>
  );
}
