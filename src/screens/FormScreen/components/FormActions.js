import React from "react";
import { useFormikContext } from "formik";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormActions = () => {
  // Hook into Formik's context to access its methods
  const { handleSubmit, handleReset, isSubmitting, touched } =
    useFormikContext();

  // Use the new useNavigate hook
  const navigate = useNavigate();

  const handleCancel = () => {
    let shouldNavigate = true;

    if (Object.keys(touched).length > 0) {
      shouldNavigate = window.confirm("Do you want to cancel?");
    }

    if (shouldNavigate) {
      navigate("/table");
    }
  };

  const handleResetConfirm = () => {
    if (Object.keys(touched).length > 0) {
      const shouldReset = window.confirm("Do you want to reset?");
      if (shouldReset) {
        handleReset();
      }
    } else {
      handleReset();
    }
  };

  return (
    <Box display="flex" justifyContent="flex-start" gap={1}>
      <Button
        type="submit"
        variant="contained"
        color="success"
        onClick={handleSubmit}
        disabled={isSubmitting}
        size="large"
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        className="reset-button"
        onClick={handleResetConfirm}
        size="large"
      >
        Reset
      </Button>
    </Box>
  );
};

export default FormActions;
