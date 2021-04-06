import React from "react";

import { Box, Divider } from "@material-ui/core";

import Categories from "../Categories/Categories";
import CategoryItems from "../CategoryItems/CategoryItems";

export default function Shop() {
  return (
    <Box display="flex" flexDirection="row" height="100%">
      <Categories />
      <Divider orientation="vertical" />
      <CategoryItems />
    </Box>
  );
}
