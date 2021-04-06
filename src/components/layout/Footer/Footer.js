import React from "react";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      marginTop="4px"
      minHeight="5vh"
    >
      <Divider />
      <Box margin="3px" style={{ textAlign: "center" }}>
        <List
          component="footer"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <ListItem style={{ textAlign: "center" }} button>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem style={{ textAlign: "center" }} button>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem style={{ textAlign: "center" }} button>
            <ListItemText primary="Our Policy" />
          </ListItem>
        </List>
      </Box>

      <Box margin="3px" style={{ textAlign: "center" }}>
        <Typography variant="h7">
          © 2021 Omer Ziger. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
