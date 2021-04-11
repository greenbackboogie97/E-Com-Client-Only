import React from "react";
import { useStyle } from "./cardStyle";

import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

export default function ItemCard(props) {
  const classes = useStyle();
  return (
    <Card
      className={classes.card}
      onClick={() => props.onCardClick(props.item)}
    >
      <CardMedia
        component="img"
        src={props.item.img}
        title={props.item.ProductName}
      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.item.categoryName}
        </Typography>
        <Typography variant="h5">{props.item.ProductName}</Typography>
        <Typography variant="h6">${props.item.Price}.00</Typography>
      </CardContent>
    </Card>
  );
}
