import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tabs, Tab, Box, Typography } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Categories() {
  const [tabValue, setTabValue] = useState();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Tabs
      style={{ height: "100%" }}
      orientation="vertical"
      value={tabValue}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      variant="standard"
    >
      <Tab label="Cameras" {...a11yProps(0)} />
      <Tab label="Video" {...a11yProps(1)} />
      <Tab label="Sport Optics" {...a11yProps(2)} />
      <Tab label="Cases" {...a11yProps(3)} />
      <Tab label="Accessories" {...a11yProps(4)} />
    </Tabs>
  );
}
