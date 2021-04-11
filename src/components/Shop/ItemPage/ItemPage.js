import React from "react";
import { useStyle } from "./itemPageStyle";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import { useStateValue } from "../../../contexts/CartProvider";

export default function ItemPage(props) {
  const classes = useStyle();

  const [{ cart }, dispatch] = useStateValue();

  const handleAddToCart = () => {
    const currentItem = { ...props.activeItem, count: 1 };
    dispatch({
      type: "ADD_TO_CART",
      payload: currentItem,
    });
  };

  return (
    <Grid item xs={10} style={{ padding: 30 }}>
      <Paper variant="elevation" elevation={3} className={classes.paper}>
        <img
          className={classes.img}
          src={props.activeItem.img}
          alt={props.activeItem.ProductName}
        />
        <Box className={classes.contentContainer}>
          <Typography gutterBottom style={{ textAlign: "center" }} variant="h4">
            {props.activeItem.ProductName}
          </Typography>
          <Divider />
          <Typography style={{ padding: 14 }} variant="h6">
            enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac
            ut consequat semper viverra nam libero justo laoreet sit amet cursus
            sit amet dictum sit amet justo donec enim diam vulputate ut pharetra
            sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra
            et ultrices neque ornare aenean euismod elementum nisi quis eleifend
            quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
            urna neque viverra justo nec ultrices dui sapien eget mi proin sed.
          </Typography>
          <p style={{ wordBreak: "break-word" }}></p>
          <Divider />
          <Box className={classes.contentBottom}>
            <Typography
              style={{ textAlign: "center" }}
              variant="h5"
              gutterBottom
            >{`Price: $${props.activeItem.Price}.00`}</Typography>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              color="primary"
              style={{ flex: 1 }}
            >
              <Typography variant="button">ADD TO CART</Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
