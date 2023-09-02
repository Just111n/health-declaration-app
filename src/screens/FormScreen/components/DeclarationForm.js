import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import TravelsSection from "./TravelsSection";
import PersonalInfoSection from "./PersonalInfoSection";
import VaccinesSection from "./VaccinesSection";
import SymptomsSection from "./SymptomsSection";
import FormActions from "./FormActions";
import ContactSection from "./ContactSection";

const DeclarationForm = () => {
  const initialValues = {
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
    vaccine: "", // Vaccine type, or whatever string value you decide on
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    age: Yup.string().required("Age is required"),
    symptoms: Yup.object().shape({
      fever: Yup.boolean(),
      soreThroat: Yup.boolean(),
      difficultyOfBreathing: Yup.boolean(),
      fiber: Yup.boolean(),
    }),
    vaccine: Yup.string().required("Please select a vaccine"),
    // ... Add validation for other fields ...
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
    mobile: Yup.string()
      // .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Mobile number is not valid")
      .required("Mobile is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <PersonalInfoSection touched={touched} errors={errors} />

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
          <ContactSection
            touched={touched}
            errors={errors}
            handleChange={handleChange}
          />

          <SymptomsSection values={values} handleChange={handleChange} />
          <VaccinesSection values={values} handleChange={handleChange} />

          <FormActions />
        </Form>
      )}
    </Formik>
  );
};

export default DeclarationForm;
// export { MySelect };
