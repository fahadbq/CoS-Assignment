import React from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAsyncAdmin } from "./AdminsSlice";

//Textfield component
import TextField from "../../helper/TextField";

const AdminDetails = (props) => {
  const dispatch = useDispatch();

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
        id: "",
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
        id: "",
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
      secret: Yup.string().required("Enter your secret message"),
      role: Yup.object().shape({
        id: Yup.string().required("Enter your role Id"),
      }),
    }),
    address: Yup.object().shape({
      address1: Yup.string().required("Address field is required"),
      address2: Yup.string().required("Address field is required"),
      city: Yup.string().required("City is required!"),
      state: Yup.string().required("State is required!"),
      zipCode: Yup.string().required("Zip code is required!"),
    }),
    practices: Yup.array(
      Yup.object().shape({
        id: Yup.string().required("Practice Id is required!"),
        name: Yup.string().required("Practice name is required!"),
      })
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    const onValuesSubmit = {
      adminFormData: values,
      resetForm,
    };
    console.log(values);
    dispatch(createAsyncAdmin(onValuesSubmit));
  };

  return (
    <div className="nav__form">
      <h2> Create an Admin </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched, dirty, isValid }) => (
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
                  type="text"
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
                  errors={errors.address?.address1}
                  touched={touched.address?.address1}
                />
              </Form.Group>

              <Form.Group className="col-md-5">
                <TextField
                  label="Address2"
                  type="text"
                  name="address.address2"
                  placeholder="Address"
                  errors={errors.address?.address2}
                  touched={touched.address?.address2}
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
                  errors={errors.address?.city}
                  touched={touched.address?.city}
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
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Practice Id"
                  type="text"
                  name="practices[0].id"
                  placeholder="Id"
                  errors={errors.practices ? errors.practices[0].id : null}
                  touched={touched.practices ? touched.practices[0].id : null}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Practice Name"
                  type="text"
                  name="practices[0].name"
                  placeholder="Name"
                  errors={errors.practices ? errors.practices[0].name : null}
                  touched={touched.practices ? touched.practices[0].name : null}
                />
              </Form.Group>
            </Row>

            <Button
              type="submit"
              variant="success"
              disabled={!dirty || !isValid}
              className="mt-3"
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
