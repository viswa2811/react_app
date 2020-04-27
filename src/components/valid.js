
import React from 'react';
//import '../App'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
  class Valid extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Name: null,
        rollno: null,
        cno: null,
        email: null,
        password: null,
        cpassword: null,
        formErrors: {
          Name: "",
          rollno: "",
          cno: "",
          email: "",
          password: "",
          cpassword: ""
        }
      };
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          Name: ${this.state.Name}
          Roll no: ${this.state.rollno}
          Contact no: ${this.state.cno}
          Email: ${this.state.email}
          Password: ${this.state.password}
          Cpassword: ${this.state.cpassword}
        `);
        window.location.replace("/page2");
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };
  
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "Name":
          formErrors.Name =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "rollno":
          formErrors.rollno =
            value.length === 8 ? "" : "Invalid Roll number";
          break;
        case "cno":
            formErrors.cno= 
            value.length === 10 ? "" : "Invalid Contact number";
            break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "minimum 6 characaters required" : "";
        break;
        case "cpassword":
            formErrors.cpassword =
            value === this.state.password ? "" : "not matching with password";
          break;
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
      const { formErrors } = this.state;
  
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="Name">
                <label htmlFor="Name">Name: </label>
                <input
                  className={formErrors.Name.length > 0 ? "error" : null}
                  placeholder="Name"
                  type="text"
                  name="Name"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.Name.length > 0 && (
                  <span className="errorMessage">{formErrors.Name}</span>
                )}
              </div>
              <div className="rollno">
                <label htmlFor="rollno">Roll Number:</label>
                <input
                  className={formErrors.rollno.length > 0 ? "error" : null}
                  placeholder="Roll number"
                  type="text"
                  name="rollno"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.rollno.length > 0 && (
                  <span className="errorMessage">{formErrors.rollno}</span>
                )}
              </div>
              <div className="cno">
                <label htmlFor="cno">Contact Number:</label>
                <input
                  className={formErrors.cno.length > 0 ? "error" : null}
                  placeholder="Contact number"
                  type="number"
                  name="cno"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.cno.length > 0 && (
                  <span className="errorMessage">{formErrors.cno}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email:</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password:</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="cpassword">
                <label htmlFor="cpassword">Confirm Password:</label>
                <input
                  className={formErrors.cpassword.length > 0 ? "error" : null}
                  placeholder="Confirm Password"
                  type="password"
                  name="cpassword"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.cpassword.length > 0 && (
                  <span className="errorMessage">{formErrors.cpassword}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">submit </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  

export default Valid;

