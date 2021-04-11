import React from "react";

import { Container, Box } from "@material-ui/core";

import Header from "./components/Layout/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Layout/Footer/Footer";

import reducer, { initialState } from "./contexts/Reducer";
import { CartProvider } from "./contexts/CartProvider";

export default function App() {
  return (
    <Container disableGutters maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        height="97.5vh"
        margin="1.25vh auto"
        padding="14px"
        borderRadius="10px"
        style={{ background: "white" }}
      >
        <CartProvider initialState={initialState} reducer={reducer}>
          <Header />
          <Shop />
          <Footer />
        </CartProvider>
      </Box>
    </Container>
  );
}
