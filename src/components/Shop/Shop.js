import React, { useState } from "react";

import { Box, Divider, Grid } from "@material-ui/core";

import Categories from "./Categories/Categories";
import CategoryItems from "./CategoryItems/CategoryItems";
import ItemPage from "./ItemPage/ItemPage";

export default function Shop() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const handleTabValue = (value) => {
    setActiveTab(value);
  };

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };
  return (
    <Box display="flex" flexDirection="column">
      <Categories value={handleTabValue} />
      <Divider />
      {activeItem ? (
        <ItemPage activeItem={activeItem} />
      ) : (
        <Grid
          container
          style={{
            overflow: "auto",
            height: "calc(97.5vh - 217px)",
          }}
        >
          <CategoryItems value={activeTab} activeItem={handleActiveItem} />
        </Grid>
      )}
    </Box>
  );
}
