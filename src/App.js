import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TableScreen from "./screens/TableScreen/TableScreen";
import FormScreen from "./screens/FormScreen/FormScreen";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Box className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/table" replace />} />
          <Route path="/table" element={<TableScreen />} />
          <Route path="/form" element={<FormScreen />} />
          <Route path="/form/:formid" element={<FormScreen />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
