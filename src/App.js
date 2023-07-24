import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: "",
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
      if (values.name && values.emailField && values.pswField) {
        alert("Login Successful");
      }
    },

    validate: (values) => {
      //1. Define error Object
      let errors = {};
      //2. Create validation error for each field
      if (!values.name) errors.name = "Field Required";
      <div>
       
        validate:(values) => {
           let emailErrors = {};
        if (!values.emailField){
          emailErrors.emailField = "Field Required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{(2, 4)}$/i.test(values.emailField)
        ) {emailErrors.emailField = "Username should be an email"}
        return emailErrors;
        }
      </div>;
      if (!values.pswField) errors.pswField = "Field Required";
      //3. return errors
      return errors;

      //4.Formik will map these to defined fields
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        {formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <div>Email</div>
        <input
          name="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailField ? (
          <div style={{ color: "red" }}>{formik.errors.emailField}</div>
        ) : null}
        <div>Password</div>
        <input
          name="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.pswField ? (
          <div style={{ color: "red" }}>{formik.errors.pswField}</div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
