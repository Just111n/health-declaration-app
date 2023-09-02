import React, { useState, useEffect } from "react";
import { Typography, TextField, MenuItem, Box, Grid } from "@mui/material";
import { Field } from "formik";
import provincesAndDistricts from "../../../data/vietnam-province-district.json";

const ContactSection = ({ touched, errors, values }) => {
  const [selectedProvince, setSelectedProvince] = useState(
    Object.keys(provincesAndDistricts).find(
      (key) => provincesAndDistricts[key].name === values.province
    ) || ""
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom className="form-section-header">
        Contact:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Field name="province">
            {({ field, form }) => (
              <TextField
                {...field}
                required
                label="Province"
                select
                fullWidth
                variant="outlined"
                margin="normal"
                onChange={(event) => {
                  const selectedProvinceName = event.target.value;
                  const selectedProvinceKey = Object.keys(
                    provincesAndDistricts
                  ).find(
                    (key) =>
                      provincesAndDistricts[key].name === selectedProvinceName
                  );

                  setSelectedProvince(selectedProvinceKey);
                  form.setFieldValue("province", selectedProvinceName);
                  form.setFieldTouched("province", true); // Mark as touched when changed
                }}
                error={touched.province && Boolean(errors.province)}
                helperText={touched.province && errors.province}
              >
                <MenuItem value="">-----Choose</MenuItem>
                {Object.keys(provincesAndDistricts).map((provinceKey) => (
                  <MenuItem
                    key={provinceKey}
                    value={provincesAndDistricts[provinceKey].name}
                  >
                    {provincesAndDistricts[provinceKey].name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </Field>
        </Grid>

        <Grid item xs={6}>
          <Field
            name="district"
            as={TextField}
            select
            fullWidth
            variant="outlined"
            margin="normal"
            label="Distrct"
            required
            InputProps={{
              style: {
                textAlign: "left",
              },
            }}
            helperText={touched.district && errors.district}
            error={touched.district && Boolean(errors.district)}
          >
            <MenuItem value="">-----Choose</MenuItem>
            {selectedProvince &&
              Object.entries(
                provincesAndDistricts[selectedProvince].cities
              ).map(([cityKey, cityName]) => (
                <MenuItem key={cityKey} value={cityName}>
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
