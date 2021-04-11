import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import ItemCard from "../ItemCard/ItemCard";

import { useItems } from "../Items/useItems";

export default function CategoryItems(props) {
  const AllItems = useItems();
  const [activeCategory, setActiveCategory] = useState(AllItems.Cameras);

  const handleCardClick = (item) => {
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
            <ItemCard item={item} onCardClick={handleCardClick} />
          </Grid>
        );
      })}
    </>
  );
}
