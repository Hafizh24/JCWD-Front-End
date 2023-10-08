import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = () => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address format").required("Email is required"),
    username: Yup.string().required("username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", username: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, action) => {
          try {
            await axios.post("http://localhost:2000/users", values);
            action.resetForm();
            console.log(values);
          } catch (error) {
            console.log(error);
          }
        }}>
        {(props) => {
          console.log(props);
          return (
            <div className="flex justify-center">
              <Form className="border border-slate-800 rounded-lg py-8 px-20">
                <div className="mb-6">
                  <h1 className=" text-center text-3xl mb-1 tracking-wider">Register</h1>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username">Username</label>
                  <Field
                    className="border rounded-sm border-slate-400 w-64"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    autoComplete="off"
                  />
                  <ErrorMessage component="div" name="username" style={{ color: "red" }} />
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    className="border rounded-sm border-slate-400 w-64"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    autoComplete="off"
                  />
                  <ErrorMessage component="div" name="email" style={{ color: "red" }} />
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    className="border rounded-sm border-slate-400 w-64"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                  <ErrorMessage component="div" name="password" style={{ color: "red" }} />
                </div>
                <button
                  className="border border-slate-300 rounded-sm w-20 bg-orange-600 text-white shadow-md"
                  type="submit">
                  Register
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
