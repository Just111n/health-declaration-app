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

const TravelsSection = ({
  values: { travels = [] },
  errors,
  touched,
  remove,
  push,
  insert,
}) => {
  const hasTravels = travels.length > 0;

  const getError = (index, fieldName) =>
    touched.travels?.[index]?.[fieldName] &&
    Boolean(errors.travels?.[index]?.[fieldName]);

  const getHelperText = (index, fieldName) =>
    touched.travels?.[index]?.[fieldName] &&
    errors.travels?.[index]?.[fieldName];

  return (
    <Box>
      <Typography variant="h6" gutterBottom className="form-section-header">
        Travel:
      </Typography>
      {hasTravels ? (
        travels.map((travel, index) => (
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
                  error={getError(index, "departureDate")}
                  helperText={getHelperText(index, "departureDate")}
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
                  error={getError(index, "immigrationDate")}
                  helperText={getHelperText(index, "immigrationDate")}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name={`travels.${index}.departure`}
                  value={travel?.departure || ""}
                  as={TextField}
                  select
                  label="Departure"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    style: { textAlign: "left" },
                  }}
                  required
                  error={getError(index, "departure")}
                  helperText={getHelperText(index, "departure")}
                >
                  <MenuItem value="">-----Choose</MenuItem>
                  {countryData.map((country) => (
                    <MenuItem key={country.code} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field
                  name={`travels.${index}.destination`}
                  value={travel?.destination || ""}
                  as={TextField}
                  select
                  label="Destination"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    style: { textAlign: "left" },
                  }}
                  required
                  error={getError(index, "destination")}
                  helperText={getHelperText(index, "destination")}
                >
                  <MenuItem value="">-----Choose</MenuItem>
                  {countryData.map((country) => (
                    <MenuItem key={country.code} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Field>
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
