import React from "react";
import { useStyles } from "./headerStyles";
import { Typography, Button, ButtonGroup, Divider } from "@material-ui/core";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.headerContainer}>
        <Typography variant="h4">E-Commerce</Typography>
        <div className={classes.buttons}>
          <Button>CART</Button>
          <ButtonGroup color="primary" variant="contained">
            <Button>Log in</Button>
            <Button>Register</Button>
          </ButtonGroup>
        </div>
      </div>
      <Divider style={{ marginBottom: "4px" }} />
    </>
  );
}
