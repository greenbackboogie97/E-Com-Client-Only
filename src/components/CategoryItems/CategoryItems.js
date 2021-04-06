import React from "react";
import accessory1 from "../CategoryItems/AccessoriesImages/accessory-1.jpg";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CategoryItems() {
  return (
    <Grid
      spacing="6"
      container
      style={{
        height: "100%",
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        margin: "4px",
      }}
    >
      {numbers.map((num, index) => {
        return (
          <Grid key={index} item xs={4}>
            <Card style={{ boxShadow: "1px 2px 10px grey" }}>
              <CardMedia component="img" src={accessory1} title="sine" />
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Category Name
                </Typography>
                <Typography variant="h5" component="h2">
                  Product Name
                </Typography>
                <Typography variant="body2" component="p">
                  $500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
