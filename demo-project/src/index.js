import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div>
            <Container className="mt-4 pl-4 pr-4 pt-4 pb-4 col-lg-6 shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col xs lg="12">
                        <h1>
                            <Card.Header>Register Here</Card.Header>
                        </h1>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="EmailId" id="EmailId" value={formik.values.EmailId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="Password" id="Password" value={formik.values.Password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.Password && formik.errors.Password ? <span style={{ color: 'red' }}>{formik.errors.Password}</span> : null}
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="Confirm_Password" id="Confirm_Password" value={formik.values.Confirm_Password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.Confirm_Password && formik.errors.Confirm_Password ? <span style={{ color: 'red' }}>{formik.errors.Confirm_Password}</span> : null}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const element = <EmployeeComponent></EmployeeComponent>
ReactDOM.render(element, document.getElementById("root"));