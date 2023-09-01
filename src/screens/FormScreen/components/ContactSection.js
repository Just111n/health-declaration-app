import React, { useState } from "react";
import { Typography, TextField, MenuItem, Box, Grid } from "@mui/material";
import { Field } from "formik";
import provincesAndDistricts from "../../../data/vietnam-province-district.json";

const ContactSection = ({ touched, errors, handleChange }) => {
  const [selectedProvince, setSelectedProvince] = useState("");

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contact:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Field
            required
            name="province"
            label="Province"
            as={TextField}
            select
            fullWidth
            variant="outlined"
            margin="normal"
            onChange={(event) => {
              handleProvinceChange(event);
              handleChange(event); // Assuming Formik's handleChange is passed as a prop
            }}
          >
            <MenuItem value="">-----Choose</MenuItem>
            {Object.keys(provincesAndDistricts).map((provinceKey) => (
              <MenuItem key={provinceKey} value={provinceKey}>
                {provincesAndDistricts[provinceKey].name}
              </MenuItem>
            ))}
          </Field>
        </Grid>
        <Grid item xs={6}>
          <Field
            required
            name="district"
            label="District"
            as={TextField}
            select
            fullWidth
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          >
            <MenuItem value="">-----Choose</MenuItem>
            {selectedProvince &&
              Object.entries(
                provincesAndDistricts[selectedProvince].cities
              ).map(([cityKey, cityName]) => (
                <MenuItem key={cityKey} value={cityKey}>
                  {cityName}
                </MenuItem>
              ))}
          </Field>
        </Grid>
        <Grid item xs={6}>
          <Field
            required
            name="address"
            as={TextField}
            label="Address"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={touched.address && errors.address}
            error={touched.address && Boolean(errors.address)}
          />
        </Grid>
        <Grid item xs={3}>
          <Field
            required
            name="email"
            as={TextField}
            type="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
        </Grid>
        <Grid item xs={3}>
          <Field
            required
            name="mobile"
            as={TextField}
            type="tel"
            label="Mobile"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={touched.mobile && errors.mobile}
            error={touched.mobile && Boolean(errors.mobile)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
