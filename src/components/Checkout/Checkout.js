import React, { useEffect, useState } from "react";
import { useStyle } from "./checkoutStyle";
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { useStateValue } from "../../contexts/CartProvider";

export default function Checkout(props) {
  const classes = useStyle();
  const [{ cart }, dispatch] = useStateValue();
  const [subtotal, setSubtotal] = useState(0);

  const handleItemCountChange = (value, index) => {
    dispatch({
      type: "CHANGE_COUNT",
      payload: { value, index },
    });
  };

  const handleItemRemove = (index) => {
    dispatch({
      type: "REMOVE",
      payload: { index },
    });
  };

  useEffect(() => {
    if (cart.length === 0) {
      return setSubtotal("$0.00");
    }
    const total = cart.map((item) => {
      return item.Price * item.count;
    });
    const reducer = (acc, cv) => acc + cv;
    const totalParsed = `$${total.reduce(reducer)}.00`;
    setSubtotal(totalParsed);
  }, [cart]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box className={classes.paper}>
          <Typography variant="h5" className={classes.headline}>
            CART SUMMARY
          </Typography>
          <Divider />
          {cart.length === 0 ? (
            <div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">Cart is Empty</Typography>
            </div>
          ) : (
            <Grid container style={{ height: "calc (60vh - 28px)" }}>
              <Grid item xs={8} className={classes.gridItemHeader}>
                <Typography variant="body1">Product</Typography>
              </Grid>
              <Grid item xs={2} className={classes.gridItemHeader}>
                <Typography variant="body1">Price</Typography>
              </Grid>
              <Grid item xs={2} className={classes.gridItemHeader}>
                <Typography variant="body1">Qty</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ height: "calc(60vh - 48px)", overflow: "auto" }}
              >
                {cart.map((item, index) => {
                  return (
                    <Grid
                      container
                      key={index}
                      index={index}
                      style={{ borderBottom: "1px solid #E0E0E0" }}
                    >
                      <Grid item xs={8} className={classes.gridItem}>
                        <img
                          src={item.img}
                          alt={item.ProductName}
                          style={{ width: "30%", maxWidth: "160px" }}
                        />
                        <Typography
                          variant="h6"
                          className={classes.productName}
                        >
                          {item.ProductName}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} className={classes.gridItem}>
                        <Typography variant="h6">{`$${item.Price}`}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        className={classes.gridItem}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <input
                          id={item.ProductName}
                          type="number"
                          min="1"
                          max="99"
                          value={item.count}
                          onChange={(e) =>
                            handleItemCountChange(e.target.value, index)
                          }
                        />
                        <Button
                          variant="text"
                          color="secondary"
                          onClick={() => handleItemRemove(index)}
                        >
                          remove
                        </Button>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          )}
          {cart.length !== 0 ? (
            <Box className={classes.bottomContainer}>
              <Typography
                variant="h5"
                style={{ textAlign: "center", paddingBottom: "14px" }}
              >
                {`Subtotal: ${subtotal}`}
              </Typography>
              <Button variant="contained" color="primary">
                CHECKOUT
              </Button>
            </Box>
          ) : null}
        </Box>
      </Fade>
    </Modal>
  );
}
