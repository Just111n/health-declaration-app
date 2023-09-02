import React from "react";
import { Typography, TextField, MenuItem, Box, Grid } from "@mui/material";
import { Field } from "formik";
import countries from "../../../data/countries.json";

const PersonalInfoSection = ({ touched, errors }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom className="form-section-header">
        Personal information:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            required
            name="fullName"
            as={TextField}
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={touched.fullName && errors.fullName}
            error={touched.fullName && Boolean(errors.fullName)}
          />
        </Grid>

        <Grid item xs={6}>
          <Field
            name="object"
            label="Object"
            as={TextField}
            select
            required
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={touched.object && errors.object}
            error={touched.object && Boolean(errors.object)}
            InputProps={{
              style: {
                textAlign: "left",
              },
            }}
          >
            <MenuItem value="">-----Choose</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
            <MenuItem value="Vietnamese">Vietnamese</MenuItem>
            <MenuItem value="International Student">
              International Student
            </MenuItem>
            <MenuItem value="Other">other</MenuItem>
          </Field>
        </Grid>

        <Grid item xs={3}>
          <Field
            required
            name="dateOfBirth"
            as={TextField}
            label="Date of birth"
            fullWidth
            variant="outlined"
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            helperText={touched.dateOfBirth && errors.dateOfBirth}
            error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
          />
        </Grid>

        <Grid item xs={3}>
          <Field
            name="gender"
            label="Gender"
            as={TextField}
            select
            required
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{
              style: {
                textAlign: "left",
              },
            }}
            helperText={touched.gender && errors.gender}
            error={touched.gender && Boolean(errors.gender)}
          >
            <MenuItem value="">-----Choose</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Field>
        </Grid>

        <Grid item xs={6}>
          <Field
            name="nationality"
            label="Nationality"
            as={TextField}
            select
            required
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{
              style: {
                textAlign: "left",
              },
            }}
            helperText={touched.nationality && errors.nationality}
            error={touched.nationality && Boolean(errors.nationality)}
          >
            <MenuItem value="">-----Choose</MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Field>
        </Grid>

        <Grid item xs={6}>
          <Field
            required
            name="nationId"
            as={TextField}
            label="Nation ID or Passport ID"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={touched.nationId && errors.nationId}
            error={touched.nationId && Boolean(errors.nationId)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfoSection;
