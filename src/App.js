import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
    },
    validate: (values) => {
      //1. Define error Object
      let errors = {};
      //2. Create validation error for each field
      if (!values.name) errors.name = "Field Required";

      if (!values.email) {
        errors.email = "Field Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }

      if (!values.password) errors.password = "Field Required";
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
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
