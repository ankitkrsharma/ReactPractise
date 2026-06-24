import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    visitorName: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Enter a valid email address (e.g., name@example.com)",
        )
        .required("Email is required"),
    mobileNumber: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
        .required("Mobile number is required"),
    department: Yup.string().required("Please select a department"),
    visitDate: Yup.string().required("Please select visit date"),
    purpose: Yup.string()
        .min(10, "Purpose must be at least 10 characters")
        .required("Purpose is required"),
    visitorType: Yup.string().required("Please select visitor type"),
    acceptTerms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions",
    ),
});

const initialValues = {
    visitorName: "",
    email: "",
    mobileNumber: "",
    department: "",
    visitDate: "",
    purpose: "",
    visitorType: "",
    needParking: false,
    acceptTerms: false,
};

function VisitorAppointmentForm() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="container py-4" style={{ maxWidth: 600 }}>
            <h2 className="text-center mb-4">Visitor Appointment Form</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form Submitted Successfully!", values);
                    setSubmitted(true);
                    resetForm();
                }}
            >
                <Form>
                    <div className="mb-3">
                        <label className="form-label">Visitor Name *</label>
                        <Field name="visitorName" type="text" className="form-control" />
                        <ErrorMessage
                            name="visitorName"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email *</label>
                        <Field name="email" type="email" className="form-control" />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile Number *</label>
                        <Field name="mobileNumber" type="text" className="form-control" />
                        <ErrorMessage
                            name="mobileNumber"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Department to Visit *</label>
                        <Field name="department" as="select" className="form-select">
                            <option value="">-- Select Department --</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Finance">Finance</option>
                            <option value="Admin">Admin</option>
                        </Field>
                        <ErrorMessage
                            name="department"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Visit Date *</label>
                        <Field name="visitDate" type="date" className="form-control" />
                        <ErrorMessage
                            name="visitDate"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Purpose of Visit *</label>
                        <Field
                            name="purpose"
                            as="textarea"
                            rows="3"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="purpose"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label d-block">Visitor Type *</label>

                        <label className="d-block">
                            <Field
                                type="radio"
                                name="visitorType"
                                value="Interview Candidate"
                            />{" "}
                            Interview Candidate
                        </label>
                        <label className="d-block">
                            <Field type="radio" name="visitorType" value="Vendor" /> Vendor
                        </label>
                        <label className="d-block">
                            <Field type="radio" name="visitorType" value="Guest" /> Guest
                        </label>

                        <ErrorMessage
                            name="visitorType"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="mb-3">
                        <label>
                            <Field type="checkbox" name="needParking" /> Yes, I need parking
                        </label>
                    </div>

                    <div className="mb-3">
                        <label>
                            <Field type="checkbox" name="acceptTerms" /> I accept the terms
                            and conditions
                        </label>
                        <ErrorMessage
                            name="acceptTerms"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-success">
                            Submit Request
                        </button>
                    </div>
                </Form>
            </Formik>

            {submitted && (
                <div className="alert alert-success mt-3">
                    Appointment Request Submitted Successfully! Our team will contact you
                    soon.
                </div>
            )}
        </div>
    );
}

export default VisitorAppointmentForm;