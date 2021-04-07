import React from "react";

import { useStyle } from "./footerStyle";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

export default function Footer() {
  const classes = useStyle();
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="77px">
        <Divider />
        <Box className={classes.box}>
          <List component="footer" className={classes.list}>
            <ListItem className={classes.listItem} button>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemText primary="Our Policy" />
            </ListItem>
          </List>
        </Box>

        <Box className={classes.box}>
          <Typography variant={"h6"}>
            © 2021 Omer Ziger. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
