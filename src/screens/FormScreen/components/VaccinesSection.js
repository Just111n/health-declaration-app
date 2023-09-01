import React from "react";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";

const VaccinesSection = ({ values, handleChange }) => (
  <Box>
    <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
      Vaccines:
    </Typography>
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography variant="subtitle1" sx={{paddingRight:5}}>
        Which one would you like to vaccinate?: 
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="vaccine"
          name="vaccine"
          value={values.vaccine}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="None" control={<Radio />} label="None" />
          <FormControlLabel
            value="AstraZeneca"
            control={<Radio />}
            label="AstraZeneca"
          />
          <FormControlLabel value="Pfizer" control={<Radio />} label="Pfizer" />
          <FormControlLabel
            value="Moderna"
            control={<Radio />}
            label="Moderna"
          />
          <FormControlLabel
            value="Sinopharm"
            control={<Radio />}
            label="Sinopharm"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  </Box>
);

export default VaccinesSection;
