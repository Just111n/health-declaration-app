import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import TravelsSection from "./TravelsSection";
import PersonalInfoSection from "./PersonalInfoSection";
import VaccinesSection from "./VaccinesSection";
import SymptomsSection from "./SymptomsSection";
import FormActions from "./FormActions";
import ContactSection from "./ContactSection";
import { Grid } from "@mui/material";
import { COVID_FORM_KEY } from "../../../config/constant";
import { useNavigate } from "react-router-dom";
import { generateShortID } from "../../../utils/utils";

const DeclarationForm = ({ formid }) => {
  const navigate = useNavigate();
  const existingData = JSON.parse(localStorage.getItem(COVID_FORM_KEY) || "[]");

  const defaultFormData = {
    fullName: "",
    object: "", // I assume it's a string based on your dropdown, adjust as necessary
    dob: "", // Date of birth - format it in the same format you plan to use in your date picker
    gender: "", // Can be "male", "female", or any other options you provide in your dropdown
    nationality: "", // Should match the country codes in your countries.json
    idOrPassport: "", // Nation ID or Passport ID
    travels: [], // Assuming this will be an array to store multiple travel details
    province: "",
    district: "",
    address: "",
    email: "",
    mobile: "",
    symptoms: [], // Array to store symptoms
    vaccines: "", // Vaccine type, or whatever string value you decide on
  };

  const initialFormData = formid
    ? existingData.find((item) => item.id === formid)
    : defaultFormData;

  // If initialFormData is undefined, we fall back to the default form structure

  const initialValues = initialFormData || defaultFormData;
  // const initialValues = defaultFormData;

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Name is required"),
    object: Yup.string().required("Object is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"), // Assuming you're using a string for the date of birth. If you're using a Date object, change this.
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
    nationId: Yup.string().required("Nation ID is required"), // Addressing the mismatch
    travels: Yup.array().of(
      Yup.object({
        departureDate: Yup.string().required("Required"),
        immigrationDate: Yup.string().required("Required"),
        departure: Yup.string().required("Required"),
        destination: Yup.string().required("Required"),
      })
    ),
    province: Yup.string().required("Contact province is required"),
    district: Yup.string().required("Contact district is required"),
    address: Yup.string().required("Contact address is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    symptoms: Yup.array().of(Yup.string()),

    vaccines: Yup.string(),
  });
  const handleSubmit = (values) => {
    // Retrieve existing data or initialize as an empty array
    const existingData = JSON.parse(
      localStorage.getItem(COVID_FORM_KEY) || "[]"
    );

    if (formid) {
      // If formid exists, update the corresponding entry
      const index = existingData.findIndex((item) => item.id === formid);
      if (index !== -1) {
        existingData[index] = values; // Update the item
      }
    } else {
      // If formid doesn't exist, generate a unique one and add the new entry
      values.id = generateShortID();
      // (Optional) You could add a loop here to generate a new ID while it's already in use.
      while (existingData.some((item) => item.id === values.id)) {
        values.id = generateShortID();
      }
      existingData.push(values);
    }

    // Store the updated data back to localStorage
    localStorage.setItem(COVID_FORM_KEY, JSON.stringify(existingData));

    // Navigate to /table
    navigate("/table");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <Grid container spacing={3}>
            {/* spacing prop is to give space between each Grid item. You can adjust the value as per your requirements. */}

            <Grid item xs={12}>
              <PersonalInfoSection touched={touched} errors={errors} />
            </Grid>

            <Grid item xs={12}>
              <FieldArray name="travels">
                {({ insert, remove, push }) => (
                  <TravelsSection
                    values={values}
                    remove={remove}
                    push={push}
                    insert={insert}
                  />
                )}
              </FieldArray>
            </Grid>

            <Grid item xs={12}>
              <ContactSection
                touched={touched}
                errors={errors}
                values={values}
              />
            </Grid>

            <Grid item xs={12}>
              <SymptomsSection touched={touched} errors={errors} />
            </Grid>

            <Grid item xs={12}>
              <VaccinesSection touched={touched} errors={errors} />
            </Grid>

            <Grid item xs={12}>
              <FormActions />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default DeclarationForm;
