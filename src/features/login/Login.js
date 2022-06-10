
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Button } from 'react-bootstrap'

const Login = (props) => {

  const initialValues={
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter your email."),
    password: Yup.string()
        .required("Enter your password")
        .min(7, "Minimum 4 characters")
  })

  return (
    <div className="nav__links">
      <h2> Login </h2>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          console.log(values) 
        }}
      >
        {({ errros, touched, dirty, isValid }) => (
          <Form >
            <Field type="email" 
              name="email" 
              placeholder="Enter your Email" 
              className='form-control'
            /> <br />

            <Field type="text" name="password" placeholder="Enter your Password" className='form-control' /> <br />
            
            <div className="d-grid gap-2" >
              <Button type="submit" className='form__field' size="sm" > Login </Button>
            </div>
          </Form>
        )}
        
      </Formik>
    </div>
  )
}

export default Login