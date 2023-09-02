import React, { useState } from "react";
import DataTable from "./components/DataTable";
import Typography from "@mui/material/Typography";
import { Box, TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TableScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="lg" paddingTop={6}>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            fontSize: "2.5rem",
            marginBottom: "16px",
            fontWeight: 500,
            // ... other styles
          }}
        >
          Vietnam Health Declaration for foreign entry
        </Typography>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <TextField
            variant="outlined"
            label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/form")}
          >
            New Form
          </Button>
        </Box>
        <DataTable searchTerm={searchTerm} />
      </Box>
    </Container>
  );
}
