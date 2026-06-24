import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function VisitorForm() {

    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        department: "",
        visitDate: "",
        purpose: "",
        visitorType: "",
        parking: false,
        terms: false
    };



    const validationSchema = Yup.object({

        name: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters"),

        email: Yup.string()
            .required("Email is required")
            .email("Enter a valid email address"),

        mobile: Yup.string()
            .required("Mobile number is required")
            .matches(/^[0-9]+$/, "Only digits allowed")
            .length(10, "Mobile number must be exactly 10 digits"),

        department: Yup.string()
            .required("Please select a department"),

        visitDate: Yup.string()
            .required("Please select visit date"),

        purpose: Yup.string()
            .required("Purpose is required")
            .min(10, "Purpose must be at least 10 characters"),

        visitorType: Yup.string()
            .required("Please select visitor type"),

        terms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")

    });



    function handleSubmit(values, { resetForm }) {

        console.log(values);// alert("Appointment Request Submitted Successfully");

        resetForm();
    }



    return (
        <div style={{ width: "700px", margin: "20px auto", padding: "20px", border: "1px solid lightgray" }}>

            ``
            <h1>Visitor Appointment Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                <Form>

                    <div>
                        <label>Visitor Name</label>
                        <br />
                        <Field type="text" name="name" />
                        <br />
                        <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                    </div>



                    <br />



                    <div>
                        <label>Email</label>
                        <br />
                        <Field type="email" name="email" />
                        <br />
                        <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                    </div>



                    <br />




                    <div>
                        <label>Mobile Number</label>
                        <br />
                        <Field type="text" name="mobile" />
                        <br />
                        <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />
                    </div>




                    <br />



                    <div>
                        <label>Department to Visit</label>
                        <br />
                        <Field as="select" name="department">
                            <option value="">Select Department</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Finance">Finance</option>
                            <option value="Admin">Admin</option>
                        </Field>
                        <br />
                        <ErrorMessage name="department" component="div" style={{ color: "red" }} />
                    </div>




                    <br />





                    <div>
                        <label>Visit Date</label>
                        <br />
                        <Field type="date" name="visitDate" />
                        <br />
                        <ErrorMessage name="visitDate" component="div" style={{ color: "red" }} />
                    </div>





                    <br />





                    <div>
                        <label>Purpose of Visit</label>
                        <br />
                        <Field as="textarea" name="purpose" rows="4" cols="40" />
                        <br />
                        <ErrorMessage name="purpose" component="div" style={{ color: "red" }} />
                    </div>





                    <br />



                    <div>
                        <label>Visitor Type</label>
                        <div>
                            <label>
                                <Field
                                    type="radio"
                                    name="visitorType"
                                    value="Interview Candidate"
                                />
                                Interview Candidate
                            </label>
                        </div>

                        <div>
                            <label>
                                <Field
                                    type="radio"
                                    name="visitorType"
                                    value="Vendor"
                                />
                                Vendor
                            </label>
                        </div>

                        <div>
                            <label>
                                <Field
                                    type="radio"
                                    name="visitorType"
                                    value="Guest"
                                />
                                Guest
                            </label>
                        </div>

                        <ErrorMessage
                            name="visitorType"
                            component="div"
                            style={{ color: "red" }}
                        />
                    </div>




                    <br />



                    <div>
                        <label>
                            <Field type="checkbox" name="parking" />
                            Need Parking
                        </label>
                    </div>





                    <br />





                    <div>
                        <label>
                            <Field type="checkbox" name="terms" /> Accept Terms and Conditions
                        </label>

                        <ErrorMessage name="terms" component="div" style={{ color: "red" }} />
                    </div>






                    <br />



                    <button type="submit">Submit Request </button>



                </Form>

            </Formik>
        </div>
    );
}



export default VisitorForm;