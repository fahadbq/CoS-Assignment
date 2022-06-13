
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { loginAsyncUser } from './loginSlice'
import { useNavigate } from 'react-router-dom'

const Login = ({ handleAuth }) => {  

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues={
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Enter your email")
      .email("Invalid email"),
    password: Yup.string()
        .required("Enter your password")
        .min(5, "Minimum 5 characters")
        .matches(passwordRules, {message: "Create a stronger password"})
  })

  return (
    <div className="nav__component">
      <h2> Login </h2>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
            
          const pushAccPath = () => {
            return navigate("/admins")
          }

          const onValuesSubmit = {
            values,
            resetForm,
            handleAuth,
            pushAccPath,
            dispatch
          }

          dispatch(loginAsyncUser(onValuesSubmit))
        }}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form >
            <Field type="email" 
              name="email" 
              placeholder="Enter your Email" 
              className='form-control'
            /> 
            { errors.email && touched.email ? <span className='error' > {errors.email} </span> : null}
            <br />

            <Field type="password" 
              name="password" 
              placeholder="Enter your Password" 
              className='form-control' 
            /> 
            { errors.password && touched.password ? <span className='error' > {errors.password} </span> : null}
            <br />
            
            <div className="d-grid gap-2" >
              <Button type="submit" className='form__field text-light' size="sm" disabled={ !dirty || !isValid } > Login </Button>
            </div>
          </Form>
        )}
        
      </Formik>
    </div>
  )
}

export default Login