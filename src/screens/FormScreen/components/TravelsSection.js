import { Typography, Box, TextField, Button } from "@mui/material";
import { Field } from "formik";

const TravelsSection = ({ values, remove, push, insert }) => (
  <Box>
    <Typography variant="h6" gutterBottom className="form-section-header">
      Travel:
    </Typography>
    {values.travels.length > 0 ? (
      values.travels.map((travel, index) => (
        <Box key={index}>
          <Field
            name={`travels.${index}.departureDate`}
            as={TextField}
            label="Departure Date"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            name={`travels.${index}.immigrationDate`}
            as={TextField}
            label="Immigration Date"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            name={`travels.${index}.departure`}
            as={TextField}
            label="Departure"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            name={`travels.${index}.destination`}
            as={TextField}
            label="Destination"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Box>
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
        <Typography variant="subtitle1" sx={{ paddingRight: 5 }} className="form-section-header">
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
