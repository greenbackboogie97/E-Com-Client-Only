import React from "react";
import { useStyles } from "./headerStyles";
import { Button, ButtonGroup, IconButton, Divider } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.headerContainer}>
        <CameraIcon
          color="primary"
          fontSize="large"
          style={{ marginLeft: "7px" }}
        />
        <div className={classes.buttons}>
          <IconButton color="secondary">
            <ShoppingCartIcon
              color="secondary"
              fontSize="large"
              style={{ marginRight: "7px" }}
            />
          </IconButton>
          <ButtonGroup color="primary" variant="contained">
            <Button>Log in</Button>
            <Button>Register</Button>
          </ButtonGroup>
        </div>
      </div>
      <Divider />
    </>
  );
}
