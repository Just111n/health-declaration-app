import React from "react";
import {
  Typography,
  FormControl,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const SymptomsSection = ({ values, handleChange }) => (
  <>
    <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
      Symptoms:
    </Typography>
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      flexWrap="nowrap"
    >
      {" "}
      <Typography variant="subtitle1" sx={{ paddingRight: 5 }}>
        Do you have any of the following symptoms?
      </Typography>
      <FormControl>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="nowrap"
        >
          <FormControlLabel
            control={
              <Checkbox
                name="symptoms"
                value="fever"
                checked={values.symptoms.includes("fever")}
                onChange={handleChange}
              />
            }
            label="Fever"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="symptoms"
                value="fiber"
                checked={values.symptoms.includes("fiber")}
                onChange={handleChange}
              />
            }
            label="Fiber"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="symptoms"
                value="soreThroat"
                checked={values.symptoms.includes("soreThroat")}
                onChange={handleChange}
              />
            }
            label="Sore throat"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="symptoms"
                value="difficultyOfBreathing"
                checked={values.symptoms.includes("difficultyOfBreathing")}
                onChange={handleChange}
              />
            }
            label="Difficulty of breathing"
          />
        </Box>
      </FormControl>{" "}
    </Box>
  </>
);

export default SymptomsSection;
