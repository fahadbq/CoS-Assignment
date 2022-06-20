import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Form, Row, Button } from "react-bootstrap";
import TextField from "../helper/TextField";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllAdmins } from "./adminsSlice";
import { asyncGetAdmin } from "../admins/adminsSlice";

const AdminDetails = ({
  formSubmission,
  toggleEdit,
  handleToggleEdit,
  removeAdmin,
}) => {
  const { adminId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const admins = useSelector(getAllAdmins);

  useEffect(() => {
    dispatch(asyncGetAdmin(adminId));
  }, [dispatch, adminId]);

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
    person: Yup.object({
      email: Yup.string().required("Enter your email").email("Invalid email"),
      role: Yup.object().shape({
        id: Yup.string().required("Enter your role Id"),
      }),
    }),
  });

  const onSubmit = (values) => {
    const onValuesSubmit = {
      adminFormData: values,
      navigate,
    };
    formSubmission(onValuesSubmit);
  };

  return (
    <div className="nav__component">
      <h1> Admin Details </h1>
      <Formik
        initialValues={admins.oneData || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Button
              className="mb-2"
              variant="secondary"
              onClick={() => {
                navigate("/admins");
              }}
            >
              Back
            </Button>
            <Row className="mb-4">
              <Form.Group className="col-md-6">
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

              <Form.Group className="col-md-6">
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
            </Row>
            <Row className="mb-4">
              <Form.Group className="col-md-4">
                <TextField
                  label="Phone Number"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Enter your Phone Number"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Extension"
                  type="text"
                  name="extension"
                  placeholder="Extension"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Hire Date"
                  type="date"
                  name="hireDate"
                  placeholder="HireDate"
                  toggle_edit={toggleEdit}
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
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Hours"
                  type="text"
                  name="hours"
                  placeholder="Hours"
                  toggle_edit={toggleEdit}
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
                  toggle_edit={toggleEdit}
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
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-5">
                <TextField
                  label="Address2"
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
                  toggle_edit={toggleEdit}
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
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="State"
                  type="text"
                  name="address.state"
                  placeholder="State"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-2">
                <TextField
                  label="Practice Id"
                  type="number"
                  name="practices[0].id"
                  placeholder="Id"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>

              <Form.Group className="col-md-3">
                <TextField
                  label="Practice Name"
                  type="text"
                  name="practices[0].name"
                  placeholder="Name"
                  toggle_edit={toggleEdit}
                />
              </Form.Group>
            </Row>
            <Button type="submit" className="mt-3 btn-success">
              {toggleEdit ? "Submit" : "Save"}
            </Button>

            <Button
              onClick={handleToggleEdit}
              className="mt-3"
              variant="warning"
              style={{ marginLeft: "900px" }}
            >
              {toggleEdit ? "Edit" : "Cancel"}
            </Button>

            <Button
              onClick={() => {
                removeAdmin(adminId);
              }}
              className="mt-3"
              variant="danger"
              style={{ marginLeft: "20px" }}
            >
              Delete
            </Button>
          </Form>
        )}
      </Formik>

      <Outlet />
    </div>
  );
};

export default AdminDetails;
