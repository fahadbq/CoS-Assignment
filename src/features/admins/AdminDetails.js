import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Row, Button } from "react-bootstrap";
import TextField from "../../helper/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllAdmins } from "./AdminsSlice";
import { asyncGetAdmin } from "../admins/AdminsSlice";

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

  const findAdmin =
    admins.data.length > 0 &&
    admins.data.find((admin) => {
      return admin.id === adminId;
    });

  console.log(findAdmin);

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
    // title: Yup.string().required("Title Required!"),
    // extension: Yup.string().required("Extension Required!"),
    // primaryPhoneNumber: Yup.string().required("Phone number Required!"),
    // hours: Yup.string().required("Hours Required!"),
    // hireDate: Yup.string().required("Enter a date"),
    // person: Yup.object().shape({
    //   email: Yup.string().required("Enter your email").email("Invalid email"),
    //   secret: Yup.string()
    //     .required("Enter your secret message")
    //     .min(8, "Minimum 8 characters")
    //     .max(12, "Maximum 12 characters"),
    //   role: Yup.object().shape({
    //     id: Yup.string().required("Enter your role Id"),
    //   }),
    // }),
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
                  label="Phone Number"
                  type="text"
                  name="primaryPhoneNumber"
                  placeholder="Enter your Phone Number"
                  errors={errors.primaryPhoneNumber}
                  touched={touched.primaryPhoneNumber}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Extension"
                  type="text"
                  name="extension"
                  placeholder="Extension"
                  errors={errors.extension}
                  touched={touched.extension}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="Title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  errors={errors.title}
                  touched={touched.title}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="Hire Date"
                  type="date"
                  name="hireDate"
                  placeholder="HireDate"
                  errors={errors.hireDate}
                  touched={touched.hireDate}
                  editToggle={toggleEdit}
                />
              </div>
            </Row>
            <Row className="mb-4">
              <div className="col-md-5">
                <TextField
                  label="Email"
                  type="email"
                  name="person.email"
                  placeholder="Please enter your Email"
                  errors={errors.person?.email}
                  touched={touched.person?.email}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Hours"
                  type="text"
                  name="hours"
                  placeholder="Hours"
                  errors={errors.hours}
                  touched={touched.hours}
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Id"
                  type="number"
                  name="person.role.id"
                  placeholder="Id"
                  errors={errors.person?.role?.id}
                  touched={touched.person?.role?.id}
                  editToggle={toggleEdit}
                />
              </div>
            </Row>
            <Row className="mb-4">
              <div className="col-md-5">
                <TextField
                  label="Address1"
                  type="text"
                  name="address.address1"
                  placeholder="Address"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-5">
                <TextField
                  label="Address2"
                  type="text"
                  name="address.address2"
                  placeholder="Address"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Zip Code"
                  type="text"
                  name="address.zipCode"
                  placeholder="Zip Code"
                  editToggle={toggleEdit}
                />
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-md-4">
                <TextField
                  label="City"
                  type="text"
                  name="address.city"
                  placeholder="City"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="State"
                  type="text"
                  name="address.state"
                  placeholder="State"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-2">
                <TextField
                  label="Practice Id"
                  type="number"
                  name="practices[0].id"
                  placeholder="Id"
                  editToggle={toggleEdit}
                />
              </div>

              <div className="col-md-3">
                <TextField
                  label="Practice Name"
                  type="text"
                  name="practices[0].name"
                  placeholder="Name"
                  editToggle={toggleEdit}
                />
              </div>
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
    </div>
  );
};

export default AdminDetails;
