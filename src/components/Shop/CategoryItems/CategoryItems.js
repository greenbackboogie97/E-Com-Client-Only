import React, { useEffect, useState } from "react";
import { useStyle } from "./categoryItemsStyle";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { useItems } from "../Items/useItems";

export default function CategoryItems(props) {
  const classes = useStyle();
  const AllItems = useItems();
  const [activeCategory, setActiveCategory] = useState(AllItems.Cameras);

  const handleCardClick = (item) => {
    console.log(item);
    props.activeItem(item);
  };

  useEffect(() => {
    if (props.value === 0) setActiveCategory(AllItems.Cameras);
    if (props.value === 1) setActiveCategory(AllItems.Video);
    if (props.value === 2) setActiveCategory(AllItems.SportOptics);
    if (props.value === 3) setActiveCategory(AllItems.Cases);
    if (props.value === 4) setActiveCategory(AllItems.Accessories);
  }, [props, AllItems]);

  return (
    <>
      {activeCategory.map((item, index) => {
        return (
          <Grid item key={index} xs={12} md={4} style={{ padding: 30 }}>
            <Card
              property={item}
              className={classes.card}
              onClick={() => handleCardClick(item)}
            >
              <CardMedia
                component="img"
                src={item.img}
                title={item.ProductName}
              />
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.categoryName}
                </Typography>
                <Typography variant="h5">{item.ProductName}</Typography>
                <Typography variant="h6">${item.Price}.00</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
