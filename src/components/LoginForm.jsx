import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address format").required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users?email=${data.email}&password=${data.password}`
      );
      dispatch(setUser(response.data[0]));
      localStorage.setItem("id", response.data[0]?.id);
      navigate("/timeline");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, action) => {
          console.log(values);
          handleSubmit(values);
          action.resetForm();
        }}>
        {(props) => {
          console.log(props);
          return (
            <div className="flex justify-center">
              <Form className="border border-slate-800 rounded-lg py-8 px-20">
                <div className="mb-6">
                  <h1 className="text-center text-3xl mb-1 tracking-wider">Login</h1>
                  <p className=" text-xs">
                    Not have account ? <span className=" text-slate-500">Register now</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email Address</label>
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
                  Login
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
