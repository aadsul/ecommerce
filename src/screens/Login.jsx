import React, { Component } from "react";

import { Formik, Field, ErrorMessage, Form } from "formik";
import { Link } from "react-router-dom";

import * as yup from "yup";

import "./style.css";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
});

class Login extends Component {
  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Formik
          enableReinitialize={true}
          validateOnBlur={false}
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          {(props) => {
            const { values, handleChange } = props;
            return (
              <div className="col-sm-12 col-md-9 col-lg-9">
                <Form className="text-left form-container">
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                      placeholder="Enter email"
                      values={values.username}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="username">
                      {(msg) => (
                        <div className="invalid-feedback d-block">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter password"
                      values={values.password}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="invalid-feedback d-block">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <div className="mt-2">
                    <Link to="/register">Create an Account</Link>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default Login;
