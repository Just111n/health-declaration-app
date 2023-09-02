import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";
import { Field } from "formik";
import countryData from "../../../data/countries.json";

const TravelsSection = ({ values, errors, touched, remove, push, insert }) => {
  const hasTravels = values?.travels?.length > 0;

  const CountryDropdown = ({ name, value }) => (
    <Field
      name={name}
      value={value || ""}
      as={TextField}
      select
      label="Departure"
      fullWidth
      variant="outlined"
      InputProps={{
        style: {
          textAlign: "left",
        },
      }}
      required
    >
      <MenuItem value="">-----Choose</MenuItem>
      {countryData.map((country) => (
        <MenuItem key={country.code} value={country.name}>
          {country.name}
        </MenuItem>
      ))}
    </Field>
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom className="form-section-header">
        Travel:
      </Typography>
      {hasTravels ? (
        values.travels.map((travel, index) => (
          <Box key={index} marginBottom={3}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Field
                  name={`travels.${index}.departureDate`}
                  value={travel?.departureDate || ""}
                  as={TextField}
                  label="Departure Date"
                  fullWidth
                  variant="outlined"
                  type="date"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  required
                  // helperText={touched.fullName && errors.fullName}
                  // error={touched.fullName && Boolean(errors.fullName)}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name={`travels.${index}.immigrationDate`}
                  value={travel?.immigrationDate || ""}
                  as={TextField}
                  label="Immigration Date"
                  fullWidth
                  variant="outlined"
                  type="date"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <CountryDropdown
                  name={`travels.${index}.departure`}
                  value={travel?.departure}
                />
              </Grid>
              <Grid item xs={6}>
                <CountryDropdown
                  name={`travels.${index}.destination`}
                  value={travel?.destination}
                />
              </Grid>
            </Grid>
            <Box
              marginTop={2}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
            >
              <Button
                className="yellow-button"
                variant="contained"
                type="button"
                onClick={() =>
                  insert(index + 1, {
                    departureDate: "",
                    immigrationDate: "",
                    departure: "",
                    destination: "",
                  })
                }
              >
                Add more
              </Button>
              <Button
                color="error"
                variant="contained"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Typography
            variant="subtitle1"
            sx={{ paddingRight: 5 }}
            className="form-section-header"
          >
            Do you travel in the last 14 days?
          </Typography>
          <Button
            className="yellow-button"
            type="button"
            variant="contained"
            onClick={() =>
              push({
                departureDate: "",
                immigrationDate: "",
                departure: "",
                destination: "",
              })
            }
          >
            Add More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TravelsSection;
