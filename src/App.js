import React from "react";

import { Container, Box } from "@material-ui/core";

import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Footer from "./components/layout/Footer/Footer";

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
        <Header />
        <Main />
        <Footer />
      </Box>
    </Container>
  );
}
