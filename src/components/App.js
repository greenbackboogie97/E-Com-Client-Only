import React from "react";

import { Container, Box } from "@material-ui/core";

import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        boxShadow="6"
        height="95vh"
        margin="2.5vh 0"
        padding="10px"
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
