import React from 'react';
// import axios from 'axios';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nevigation} from './component/Nevigation.js'
import { Form, Button, Container, Col, Row, Card} from 'react-bootstrap';

const EmployeeComponent = () => {
    const formik = useFormik({
        initialValues: {
            Confirm_Password: '',
            Password: '',
            EmailId: ''
        },

        validationSchema: yup.object({
            EmailId: yup.string().email("Invelid email address").required("Please Enter Email Id"),
            Confirm_Password: yup.string().required('Confirm Password is required').oneOf([yup.ref('Password'), null], 'Passwords does not match'),
            Password: yup.string().required("Please Enter A Password").matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
                "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
        }),

        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <Container className="mt-4 pl-4 pr-4 pt-4 pb-4 col-lg-4 shadow p-3 mb-5 bg-white rounded">
            <Row>
                <Col xs lg="12">
                    <Card border="info" className="col-lg-12" >
                        <Form onSubmit={formik.handleSubmit} className="ml-2 mr-2">
                            <div className="text-center mb-2">
                                <img src={logo} alt="Logo" />
                                <h1 className="h3 mb-3">Register Here</h1>
                            </div>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="EmailId" id="EmailId" value={formik.values.EmailId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="Password" id="Password" value={formik.values.Password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.Password && formik.errors.Password ? <span style={{ color: 'red' }}>{formik.errors.Password}</span> : null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="Confirm_Password" id="Confirm_Password" value={formik.values.Confirm_Password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.Confirm_Password && formik.errors.Confirm_Password ? <span style={{ color: 'red' }}>{formik.errors.Confirm_Password}</span> : null}
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mb-2">
                                Register
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const element = <EmployeeComponent></EmployeeComponent>
ReactDOM.render(element, document.getElementById("root"));