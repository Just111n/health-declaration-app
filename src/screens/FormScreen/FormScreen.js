import { Typography, Container } from "@mui/material";
import React from "react";
import DeclarationForm from "./components/DeclarationForm";
import { useParams } from "react-router-dom";

const FormScreen = () => {
  const { formid } = useParams();
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      <Typography
        variant="h1"
        gutterBottom
        style={{
          fontSize: "2rem",
          marginBottom: "16px",
          fontWeight: 500,
          color: "#198754",
        }}
      >
        MEDICAL DECLARATION FORM FOR FOREIGN ENTRY
      </Typography>
      <DeclarationForm formid={formid} />
    </Container>
  );
};

export default FormScreen;
