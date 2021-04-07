import React, { useState } from "react";

import { Tabs, Tab } from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Categories(props) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    props.value(newValue);
    setTabValue(newValue);
  };
  return (
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="fullWidth"
    >
      <Tab label="Cameras" {...a11yProps(0)} />
      <Tab label="Video" {...a11yProps(1)} />
      <Tab label="Sport Optics" {...a11yProps(2)} />
      <Tab label="Cases" {...a11yProps(3)} />
      <Tab label="Accessories" {...a11yProps(4)} />
    </Tabs>
  );
}
