import React from "react";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  FormHelperText,
} from "@mui/material";
import { Field } from "formik";

const VaccinesSection = ({ touched, errors }) => (
  <Box width="lg">
    <Typography variant="h6" gutterBottom className="form-section-header">
      Vaccines:
    </Typography>
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography variant="subtitle1" sx={{ paddingRight: 5 }}>
        Which one would you like to vaccinate?:
      </Typography>
      <FormControl
        component="fieldset"
        error={touched.vaccine && Boolean(errors.vaccine)}
      >
        <Field name="vaccines">
          {({ field }) => (
            <Box width="lg">
              <FormControlLabel
                value=""
                control={
                  <Radio
                    checked={field.value === ""}
                    onChange={field.onChange}
                    name={field.name}
                  />
                }
                label="None"
              />
              <FormControlLabel
                value="AstraZeneca"
                control={
                  <Radio
                    checked={field.value === "AstraZeneca"}
                    onChange={field.onChange}
                    name={field.name}
                  />
                }
                label="AstraZeneca"
              />
              <FormControlLabel
                value="Pfizer"
                control={
                  <Radio
                    checked={field.value === "Pfizer"}
                    onChange={field.onChange}
                    name={field.name}
                  />
                }
                label="Pfizer"
              />
              <FormControlLabel
                value="Moderna"
                control={
                  <Radio
                    checked={field.value === "Moderna"}
                    onChange={field.onChange}
                    name={field.name}
                  />
                }
                label="Moderna"
              />
              <FormControlLabel
                value="Sinopharm"
                control={
                  <Radio
                    checked={field.value === "Sinopharm"}
                    onChange={field.onChange}
                    name={field.name}
                  />
                }
                label="Sinopharm"
              />
            </Box>
          )}
        </Field>
        {/* Displaying Formik error messages */}
        {touched.vaccine && errors.vaccine ? (
          <FormHelperText>{errors.vaccine}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  </Box>
);

export default VaccinesSection;
