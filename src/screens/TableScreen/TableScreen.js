import { useState } from "react";
import DataTable from "./components/DataTable";
import Typography from "@mui/material/Typography";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TableScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
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
          color="primary"
          onClick={() => navigate("/form")}
        >
          New Form
        </Button>
      </Box>

      <DataTable />
    </Box>
  );
}
