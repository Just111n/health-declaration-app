import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormActions = () => {
  // Hook into Formik's context to access its methods
  const { handleSubmit, handleReset, isSubmitting } = useFormikContext();

  // Use the new useNavigate hook
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button
        type="submit"
        variant="contained"
        color="success"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => navigate("/table")}
      >
        Cancel
      </Button>
      <Button variant="contained" color="secondary" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default FormActions;
