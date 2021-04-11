import React, { useState } from "react";

import { Box, Divider, Grid } from "@material-ui/core";

import Categories from "./Categories/Categories";
import CategoryItems from "./CategoryItems/CategoryItems";
import ItemPage from "./ItemPage/ItemPage";

export default function Shop(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const handleTabValue = (value) => {
    setActiveTab(value);
    setActiveItem(null);
  };

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Categories value={handleTabValue} />
      <Divider />
      <Grid
        container
        style={
          activeItem
            ? {
                overflow: "auto",
                height: "calc(97.5vh - 217px)",
                justifyContent: "center",
              }
            : {
                overflow: "auto",
                height: "calc(97.5vh - 217px)",
              }
        }
      >
        {activeItem ? (
          <ItemPage activeItem={activeItem} />
        ) : (
          <CategoryItems value={activeTab} activeItem={handleActiveItem} />
        )}
      </Grid>
    </Box>
  );
}
