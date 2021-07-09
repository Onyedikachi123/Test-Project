import React, { Component } from 'react';
import '../components/Register.css';
import { Link } from "react-router-dom"

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

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: null,
            lastName: null,
            companyAddress: null,
            email: null,
            phoneNumber: null,
            password: null,
            formErrors: {
                companyName: "",
                lastName: "",
                companyAddress: "",
                phoneNumber: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            Company Name: ${this.state.companyName}
            Last Name: ${this.state.lastName}
            Company Address: ${this.state.companyAddress}
            Phone Number: ${this.state.phoneNumber}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "companyName":
                formErrors.companyName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "companyAddress":
                formErrors.companyAddress =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "phoneNumber":
                formErrors.phoneNumber =
                    value.length < 11 ? "minimum 11 characaters required" : "";
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
                    <h1>Basic Information</h1>
                    <p>Enter the following information below</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                className={formErrors.companyName.length > 0 ? "error" : null}
                                placeholder="Company Name"
                                type="text"
                                name="companyName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.companyName.length > 0 && (
                                <span className="errorMessage">{formErrors.companyName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="companyAddress">Company Address</label>
                            <input
                                className={formErrors.companyAddress.length > 0 ? "error" : null}
                                placeholder="Company Address"
                                type="text"
                                name="companyAddress"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.companyAddress.length > 0 && (
                                <span className="errorMessage">{formErrors.companyAddress}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input
                                className={formErrors.phoneNumber.length > 0 ? "error" : null}
                                placeholder="Phone Number"
                                type="text"
                                name="phoneNumber"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.phoneNumber.length > 0 && (
                                <span className="errorMessage">{formErrors.phoneNumber}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
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
                            <label htmlFor="password">Password</label>
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
                        <p>By clicking "Next" you agree to our Terms of Service, Privacy Policy, and to receive marketing communications from Envoy.</p>
                        <div className="createAccount">
                            <small>Got an account? <Link to="/LoginPage">Sign in</Link></small>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;

