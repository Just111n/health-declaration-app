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

const TravelsSection = ({ values, remove, push, insert }) => (
  <Box>
    <Typography variant="h6" gutterBottom className="form-section-header">
      Travel:
    </Typography>
    {values.travels.length > 0 ? (
      values.travels.map((travel, index) => (
        <Box key={index} marginBottom={3}>
          <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid item xs={6}>
              <Field
                name={`travels.${index}.departureDate`}
                value={values.travels?.[index]?.departureDate || ""}
                as={TextField}
                label="Departure Date"
                fullWidth
                variant="outlined"
                type="date"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name={`travels.${index}.immigrationDate`}
                value={values.travels?.[index]?.immigrationDate || ""}
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
            {/* Row 2 */}
            <Grid item xs={6}>
              <Field
                name={`travels.${index}.departure`}
                value={values.travels?.[index]?.departure || ""}
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
                {" "}
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
                value={values.travels?.[index]?.destination || ""}
                as={TextField}
                select
                label="Destination"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    textAlign: "left",
                  },
                }}
                required
              >
                {" "}
                <MenuItem value="">-----Choose</MenuItem>
                {countryData.map((country) => (
                  <MenuItem key={country.code} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Box marginTop={2}>
            <Button
              variant="contained"
              color="secondary"
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
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography
          variant="subtitle1"
          sx={{ paddingRight: 5 }}
          className="form-section-header"
        >
          Do you travel in the last 14 days?
        </Typography>
        <Button
          type="button"
          color="secondary"
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

export default TravelsSection;
