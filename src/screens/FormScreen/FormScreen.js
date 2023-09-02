import { Typography, Container } from "@mui/material";
import React from "react";
import DeclarationForm from "./components/DeclarationForm";

const FormScreen = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        MEDICAL DECLARATION FORM FOR FOREIGN ENTRY
      </Typography>
      <DeclarationForm />
    </Container>
  );
};

export default FormScreen;
