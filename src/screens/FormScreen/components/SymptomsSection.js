import React from "react";
import {
  Typography,
  FormControl,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Field } from "formik";

const SymptomsSection = () => (
  <>
    <Typography variant="h6" gutterBottom className="form-section-header">
      Symptoms:
    </Typography>
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      flexWrap="nowrap"
    >
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
          {["Fiber", "Fever", "Sore throat", "Difficulty of breathing"].map(
            (symptom) => (
              <Field key={symptom} name="symptoms">
                {({ field, form }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={field.name}
                        value={symptom}
                        checked={field.value.includes(symptom)}
                        onChange={() => {
                          if (field.value.includes(symptom)) {
                            const nextValue = field.value.filter(
                              (v) => v !== symptom
                            );
                            form.setFieldValue(field.name, nextValue);
                          } else {
                            const nextValue = [...field.value, symptom];
                            form.setFieldValue(field.name, nextValue);
                          }
                        }}
                      />
                    }
                    label={symptom}
                  />
                )}
              </Field>
            )
          )}
        </Box>
      </FormControl>
    </Box>
  </>
);

export default SymptomsSection;
