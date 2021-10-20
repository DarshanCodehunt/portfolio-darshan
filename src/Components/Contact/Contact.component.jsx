import React from "react";
import "./Contact.scss";
import { API, graphqlOperation } from "aws-amplify";
import { createUserContact } from "../../graphql/mutations";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput.component";

const Contact = React.forwardRef((props, ref) => {
  const createUser = async (contactObj) => {
    try {
      let response = await API.graphql(
        graphqlOperation(createUserContact, { input: contactObj })
      );

      if (response) {
        toast.success(
          "Thank you for Contacting!!.Will get back to you Shortly.",
          { duration: 4000 }
        );
      }
    } catch (err) {
      toast.error("Something went wrong.Try after sometime", {
        duration: 4000,
      });
    }
  };

  const renderForm = () => {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    return (
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("This field is Required."),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .max(15, "Must be 15 characters or less")
            .required("This field is Required."),
          email: Yup.string()
            .email("Invalid email addresss")
            .required("This field is Required."),
          message: Yup.string(),
        })}
        onSubmit={async (payload) => {
          createUser(payload);
        }}
      >
        <Form>
          <TextInput label="Name" name="name" type="text" />
          <TextInput label="Phone Number" name="phone" type="text" />
          <TextInput label="Email Address" name="email" type="email" />
          <TextInput label="Message" name="message" type="text" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };

  return (
    <div ref={ref} className={"contact-container"}>
      <Toaster position="bottom-center" />
      <div className={"contact-title"}>
        Contact <div className={"divider"}></div>
      </div>
      <>{renderForm()}</>
    </div>
  );
});

export default Contact;
