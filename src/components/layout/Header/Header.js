import React, { useState } from "react";
import { useStyles } from "./headerStyles";
import { IconButton, Divider, Typography } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Checkout from "../../Checkout/Checkout";

export default function Header(props) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleCartClick = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <CameraIcon
          color="primary"
          style={{ marginLeft: "7px", fontSize: "large" }}
        />
        <div className={classes.buttons}>
          <Typography variant="h6" style={{ marginRight: "7px" }}>
            Welcome Customer Name!
          </Typography>
          <IconButton color="secondary" onClick={handleCartClick}>
            <ShoppingCartIcon color="secondary" fontSize="large" />
          </IconButton>
        </div>
      </div>
      <Divider />
      <Checkout
        open={openModal}
        handleClose={onClose}
        addedToCart={props.addedToCart}
      />
    </>
  );
}
