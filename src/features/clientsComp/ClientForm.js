import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Row, Button } from "react-bootstrap";

//Textfield component
import TextField from "../../helper/TextField";
import { useParams } from "react-router-dom";

const ClientDetails = ({
  formSubmission,
  oneData,
  toggleEdit,
  handleToggleEdit,
  removeClient,
  updateButton,
  deleteButton,
}) => {
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
        {({ errors, touched }) => (
          <Form>
            <Row className="mb-4">
              <div className="col-md-6">
                <TextField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                  errors={errors.firstName}
                  touched={touched.firstName}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-6">
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  errors={errors.lastName}
                  touched={touched.lastName}
                  editToggle={toggleEdit}
                />
              </div>
            </Row>

            <Row className="mb-4">
              <div className="col-md-4">
                <TextField
                  label="Gender"
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  errors={errors.gender}
                  touched={touched.gender}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <div className="form-label">ClientFlag</div>
                <input
                  type="checkbox"
                  className="form-checkbox-input"
                  name="clientFlag"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  errors={errors.email}
                  touched={touched.email}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <div className="form-label">OptingIn</div>
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="emailOptingIn"
                  placeholder="HireDate"
                  editToggle={toggleEdit}
                />
              </div>
            </Row>

            <Row className="mb-4">
              <div className="col-md-5">
                <TextField
                  label="Phone Number 1"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Please enter your Mobile Number"
                  errors={errors.primaryPhoneNumber}
                  touched={touched.primaryPhoneNumber}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="Phone Number 2"
                  type="text"
                  name="secondaryPhoneNumber"
                  placeholder="Please enter your Mobile Number"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Address 1 "
                  type="text"
                  name="address.address1"
                  placeholder="Address"
                  errors={errors.address?.address1}
                  touched={touched.address?.address1}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Address 2 "
                  type="text"
                  name="address.address2"
                  placeholder="Address"
                  editToggle={toggleEdit}
                />
              </div>
            </Row>

            <Row className="mb-4">
              <div className="col-md-5">
                <TextField
                  label="City"
                  type="text"
                  name="address.city"
                  placeholder="Address"
                  errors={errors.address?.city}
                  touched={touched.address?.city}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-5">
                <TextField
                  label="State"
                  type="text"
                  name="address.state"
                  placeholder="State"
                  errors={errors.address?.state}
                  touched={touched.address?.state}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Zip Code"
                  type="text"
                  name="address.zipCode"
                  placeholder="Zip Code"
                  errors={errors.address?.zipCode}
                  touched={touched.address?.zipCode}
                  editToggle={toggleEdit}
                />
              </div>
            </Row>

            <Row className="mb-3">
              <div className="col-md-4">
                <TextField
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  placeholder="Date of birth"
                  errors={errors.dob}
                  touched={touched.dob}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="Guardian"
                  type="text"
                  name="guardian"
                  placeholder="Guardian"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-4">
                <TextField
                  label="Emergency Contact Number"
                  type="text"
                  name="emergencyContactNumber"
                  placeholder="emergencyContactNumber"
                  errors={errors.emergencyContactNumber}
                  touched={touched.emergencyContactNumber}
                  editToggle={toggleEdit}
                />
              </div>
            </Row>

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
