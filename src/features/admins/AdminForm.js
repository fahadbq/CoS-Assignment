import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAsyncAdmin } from "./AdminsSlice";

//Textfield component
import TextField from "../helper/TextField";

const AdminDetails = (props) => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    title: "",
    extension: "",
    primaryPhoneNumber: "",
    hours: "",
    hireDate: "",
    person: {
      email: "",
      secret: "",
      role: {
        id: 0,
      },
    },
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    practices: [
      {
        id: 0,
        name: "",
      },
    ],
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

  const onSubmit = (FormValues, onSubmitProps) => {
    const values = {
      adminFormData: FormValues,
      onSubmitProps,
    };
    dispatch(createAsyncAdmin(values));
  };

  return (
    <div className="nav__form">
      <h2>Create an Admin</h2>

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
                  label="Phone Number"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Enter your Phone Number"
                  errors={errors.primaryPhoneNumber}
                  touched={touched.primaryPhoneNumber}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Extension"
                  type="text"
                  name="extension"
                  placeholder="Extension"
                  errors={errors.extension}
                  touched={touched.extension}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  errors={errors.title}
                  touched={touched.title}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Hire Date"
                  type="date"
                  name="hireDate"
                  placeholder="HireDate"
                  errors={errors.hireDate}
                  touched={touched.hireDate}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="Email"
                  type="email"
                  name="person.email"
                  placeholder="Please enter your Email"
                  errors={errors.person?.email}
                  touched={touched.person?.email}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Secret"
                  type="password"
                  name="person.secret"
                  placeholder="Secret"
                  errors={errors.person?.secret}
                  touched={touched.person?.secret}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Hours"
                  type="text"
                  name="hours"
                  placeholder="Hours"
                  errors={errors.hours}
                  touched={touched.hours}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Id"
                  type="number"
                  name="person.role.id"
                  placeholder="Id"
                  errors={errors.person?.role?.id}
                  touched={touched.person?.role?.id}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group className="col-md-5">
                <TextField
                  label="Address1"
                  type="text"
                  name="address.address1"
                  placeholder="Address"
                />
              </Form.Group>

              <Form.Group className="col-md-5">
                <TextField
                  label="Address2"
                  type="text"
                  name="address.address2"
                  placeholder="Address"
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
                  label="City"
                  type="text"
                  name="address.city"
                  placeholder="City"
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="State"
                  type="text"
                  name="address.state"
                  placeholder="State"
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Practice Id"
                  type="number"
                  name="practices[0].id"
                  placeholder="Id"
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Practice Name"
                  type="text"
                  name="practices[0].name"
                  placeholder="Name"
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

export default AdminDetails;
