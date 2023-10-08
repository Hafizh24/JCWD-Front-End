import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar } from "flowbite-react";

const TweetForm = () => {
  const { id, username } = useSelector((state) => state.user.data);
  //   console.log(username);

  const handleSubmit = async (data) => {
    try {
      await axios.post("http://localhost:2000/tweets", {
        userId: id,
        text: data.tweet,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ tweet: "" }}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
          window.location.reload();
        }}>
        {(props) => {
          console.log(props);
          return (
            <Form className="border p-4">
              <div className="mb-4 flex gap-x-2">
                <Avatar rounded />
                <Field
                  name="tweet"
                  as="textarea"
                  className="textarea w-full border rounded-md pl-4 pt-2"
                  placeholder="What is happening?!"
                />
                <ErrorMessage name="tweet" />
              </div>
              <div className="flex justify-end">
                <button className=" bg-sky-500 py-2 px-5 rounded-2xl text-white" type="submit">
                  Post
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default TweetForm;
