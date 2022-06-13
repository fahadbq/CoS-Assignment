import React from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Row, Button } from "react-bootstrap";

//Textfield component
import TextField from "../../helper/TextField";

const AdminDetails = (props) => {
  const { adminId } = useParams(); // admin ID

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
  };

  const validationSchema = Yup.object({});

  const onSubmit = (values, resetForm) => {
    console.log(values);
  };

  return (
    <div className="nav__form">
      <h2> Create Admin </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched, dirty, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="col-md-6">
                <TextField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                />
              </Form.Group>

              <Form.Group className="col-md-6">
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col-md-4">
                <TextField
                  label="Title"
                  type="text"
                  name="title"
                  placeholder="Title"
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Extension"
                  type="text"
                  name="extension"
                  placeholder="Extension"
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Phone Number"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Enter your Phone Number"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col-md-8">
                <TextField
                  label="Email"
                  type="email"
                  name="person.email"
                  placeholder="Please enter your Email"
                />
              </Form.Group>

              <Form.Group className="col-md-4">
                <TextField
                  label="Hire Date"
                  type="date"
                  name="hireDate"
                  placeholder="HireDate"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col-md-6">
                <TextField
                  label="Secret"
                  type="text"
                  name="person.secret"
                  placeholder="Secret"
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Hours"
                  type="text"
                  name="hours"
                  placeholder="Hours"
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Id"
                  type="number"
                  name="person.role.id"
                  placeholder="Id"
                />
              </Form.Group>
            </Row>

            <Button type="submit" variant="success">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminDetails;
