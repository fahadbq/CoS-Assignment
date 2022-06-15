import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { asyncCreateClient } from "./ClientsSlice";

//Textfield component
import TextField from "../../helper/TextField";

const ClientDetails = ({ formSubmission }) => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    clientFlag: false,
    gender: "",
    email: "",
    emailOptingIn: false,
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    guardian: "",
    emergencyContactNumber: "",
    dob: "",
    note: "",
    billingNote: "",
    insurance: {
      id: 0,
      name: "",
      eapFlag: false,
      teletherapyModifier: "",
    },
    insurancePolicyNumber: "",
    insuranceGroupNumber: "",
    insuredRelationship: "",
    insuredFirstName: "",
    insuredLastName: "",
    insuredDob: "",
    emergencyContactName: "",
    activeFlag: false,
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    clinicians: [
      {
        id: 0,
      },
    ],
    location: {
      id: 0,
      name: "",
      code: "",
      address: {
        id: 0,
        address1: "",
        address2: "",
        city: "",
        state: "",
        deleteFlag: false,
        zipCode: "",
      },
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter your first name"),
    lastName: Yup.string().required("Enter your last name"),
    title: Yup.string().required("Title Required!"),
    extension: Yup.string().required("Extension Required!"),
    primaryPhoneNumber: Yup.string().required("Phone number Required!"),
    hours: Yup.string().required("Hours Required!"),
    hireDate: Yup.string().required("Enter a date"),
    person: Yup.object().shape({
      email: Yup.string().required("Enter your email").email("Invalid email"),
      secret: Yup.string()
        .required("Enter your secret message")
        .min(8, "Minimum 8 characters")
        .max(12, "Maximum 12 characters"),
      role: Yup.object().shape({
        id: Yup.string().required("Enter your role Id"),
      }),
    }),
  });

  const onSubmit = (formValues, onSubmitProps) => {
    const values = {
      clientFormData: formValues,
      onSubmitProps,
    };
    formSubmission(values);
    // dispatch(createAsyncAdmin(onValuesSubmit));
  };

  return (
    <div className="nav__form">
      <h2>Create a Client</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group className="col-md-6">
                <TextField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
              </Form.Group>

              <Form.Group className="col-md-6">
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-4">
                <TextField
                  label="Gender"
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  errors={errors.gender}
                  touched={touched.gender}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <Form.Check
                  label="ClientFlag"
                  type="checkbox"
                  className="form-checkbox-input"
                  name="clientFlag"
                  errors={errors.clientFlag}
                  touched={touched.clientFlag}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  errors={errors.email}
                  touched={touched.email}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <Form.Check
                  label="OptingIn"
                  type="checkbox"
                  name="emaiOptingIn"
                  placeholder="HireDate"
                  errors={errors.emaiOptingIn}
                  touched={touched.emaiOptingIn}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="Phone Number 1"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Please enter your Mobile Number"
                  errors={errors.primaryPhoneNumber}
                  touched={touched.primaryPhoneNumber}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Phone Number 2"
                  type="text"
                  name="secondaryPhoneNumber"
                  placeholder="Please enter your Mobile Number"
                  errors={errors.secondaryPhoneNumber}
                  touched={touched.secondaryPhoneNumber}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Address 1 "
                  type="text"
                  name="address.address1"
                  placeholder="Address"
                  errors={errors.address?.address1}
                  touched={touched.address?.address1}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Address 2 "
                  type="text"
                  name="address.address2"
                  placeholder="Address"
                  errors={errors.address?.address2}
                  touched={touched.address?.address2}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="City"
                  type="text"
                  name="address.city"
                  placeholder="Address"
                  errors={errors.address?.city}
                  touched={touched.address?.city}
                />
              </Form.Group>

              <Form.Group className="col-md-5">
                <TextField
                  label="State"
                  type="text"
                  name="address.state"
                  placeholder="State"
                  errors={errors.address?.state}
                  touched={touched.address?.state}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Zip Code"
                  type="text"
                  name="address.zipCode"
                  placeholder="Zip Code"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col-md-4">
                <TextField
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  placeholder="Date of birth"
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Guardian"
                  type="text"
                  name="guardian"
                  placeholder="Guardian"
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Emergency Contact Number"
                  type="text"
                  name="emergencyContactNumber"
                  placeholder="emergencyContactNumber"
                />
              </Form.Group>
            </Row>

            <Button
              type="submit"
              variant="success"
              className="mt-3"
              style={{ marginRight: "50px" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ClientDetails;
