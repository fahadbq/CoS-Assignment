import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Row, Button } from "react-bootstrap";

//Textfield component
import TextField from "../helper/TextField";
import { useNavigate, useParams } from "react-router-dom";

const ClientDetails = ({
  formSubmission,
  oneData,
  toggleEdit,
  handleToggleEdit,
  removeClient,
  updateButton,
  deleteButton,
  backButton,
}) => {
  const navigate = useNavigate();

  const { clientId } = useParams();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    clientFlag: false,
    emailOptingIn: true,
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    guardian: "",
    emergencyContactNumber: "",
    emergencyContactName: "",
    dob: "",
    note: "",
    billingNote: "",
    insurance: null,
    insurancePolicyNumber: "",
    insuranceGroupNumber: "",
    insuredRelationship: "Self",
    insuredFirstName: "",
    insuredLastName: "",
    insuredDob: "",
    activeFlag: true,
    createUser: "",
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    clinicians: [],
    location: {
      id: 1,
      name: "",
      code: "",
      address: {
        id: 0,
        address1: "",
        address2: "",
        state: "",
        city: "",
        zipCode: "",
      },
      label: "",
      value: 0,
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter your first name"),
    lastName: Yup.string().required("Enter your last name"),
    gender: Yup.string().required("Gender is Required!"),
    email: Yup.string().required("Enter your email").email("Invalid email"),
    primaryPhoneNumber: Yup.string().required("Phone Number is Required!"),
    emergencyContactNumber: Yup.string().required(
      "Emergency Contact is Required!"
    ),
    dob: Yup.date().required("Date of birth is Required!"),
    address: Yup.object().shape({
      address1: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zipCode: Yup.string().required("Zip Code is required"),
    }),
  });

  const onSubmit = (formValues, onSubmitProps) => {
    const formData = {
      clientFormData: formValues,
      onSubmitProps,
      navigate,
    };
    formSubmission(formData);
  };

  return (
    <div>
      <Formik
        initialValues={oneData || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            {backButton && (
              <Button
                className="mb-2"
                variant="secondary"
                onClick={() => {
                  navigate("/clients");
                }}
              >
                {backButton}
              </Button>
            )}
            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                  errors={errors.firstName}
                  touched={touched.firstName}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  errors={errors.lastName}
                  touched={touched.lastName}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Gender"
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  errors={errors.gender}
                  touched={touched.gender}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  errors={errors.email}
                  touched={touched.email}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Billing Note"
                  type="text"
                  name="billingNote"
                  placeholder="billingNote"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <Form.Group className="form-label">ClientFlag</Form.Group>
                <Form.Check
                  type="checkbox"
                  name="clientFlag"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
              <Form.Group className="col-md-2">
                <Form.Group className="form-label">OptingIn</Form.Group>
                <Form.Check
                  type="checkbox"
                  name="emailOptingIn"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-4">
                <TextField
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  placeholder="Date of birth"
                  errors={errors.dob}
                  touched={touched.dob}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Phone Number 1"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Please enter your Mobile Number"
                  errors={errors.primaryPhoneNumber}
                  touched={touched.primaryPhoneNumber}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Phone Number 2"
                  type="text"
                  name="secondaryPhoneNumber"
                  placeholder="Please enter your Mobile Number"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="Address 1 "
                  type="text"
                  name="address.address1"
                  placeholder="Address"
                  errors={errors.address?.address1}
                  touched={touched.address?.address1}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-5">
                <TextField
                  label="Address 2 "
                  type="text"
                  name="address.address2"
                  placeholder="Address"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Zip Code"
                  type="text"
                  name="address.zipCode"
                  placeholder="Zip Code"
                  errors={errors.address?.zipCode}
                  touched={touched.address?.zipCode}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col-md-3">
                <TextField
                  label="City"
                  type="text"
                  name="address.city"
                  placeholder="Address"
                  errors={errors.address?.city}
                  touched={touched.address?.city}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="State"
                  type="text"
                  name="address.state"
                  placeholder="State"
                  errors={errors.address?.state}
                  touched={touched.address?.state}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Guardian"
                  type="text"
                  name="guardian"
                  placeholder="Guardian"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Emergency Contact"
                  type="text"
                  name="emergencyContactNumber"
                  placeholder="Emergency Contact"
                  errors={errors.emergencyContactNumber}
                  touched={touched.emergencyContactNumber}
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3"></Row>

            <Button
              type="submit"
              variant="success"
              className="mt-3"
              style={{ marginRight: "50px" }}
            >
              Submit
            </Button>

            {updateButton && (
              <Button
                onClick={handleToggleEdit}
                className="mt-3"
                variant="warning"
                style={{ marginLeft: "800px" }}
              >
                {toggleEdit ? "Edit" : "Cancel"}
              </Button>
            )}

            {deleteButton && (
              <Button
                onClick={() => {
                  removeClient(clientId);
                }}
                className="mt-3"
                variant="danger"
                style={{ marginLeft: "20px" }}
              >
                Delete
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ClientDetails;
