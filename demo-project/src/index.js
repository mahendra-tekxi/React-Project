import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeComponent = () => {
    const formik = useFormik({
        initialValues: {
            Confirm_Password: '',
            Password: '',
            Id: '',
            Name: '',
            Location: '',
            Salary: '',
            EmailId: ''
        },

        validationSchema: yup.object({
            Name: yup.string().max(20, "Name should not exceed 20 characters").required("please enter the Employee Name"),
            EmailId: yup.string().email("Invelid email address").required("Please Enter Email Id"),
            Location: yup.string().required("Please Enter A Location"),
            Confirm_Password: yup.string().required('Confirm Password is required').oneOf([yup.ref('Password'), null], 'Passwords does not match'),
            Password: yup.string().required("Please Enter A Password"),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <Container className="mt-4 pl-4 pr-4 pt-4 pb-4 col-lg-6 shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col xs lg="8">
                        <h1>
                            <Badge variant="secondary">Register Here</Badge>
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
            <h2>New Employee Form...</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee ID : </label>
                    <input type="text" name="Id" id="Id" value={formik.values.Id}
                        onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Name">Employee Name : </label>
                    <input type="text" name="Name" id="Name" value={formik.values.Name}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.Name && formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : null}
                </p>
                <p>
                    <label htmlFor="Location">Employee Location : </label>
                    <input type="text" name="Location" id="Location" value={formik.values.Location}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.Location && formik.errors.Location ? <span style={{ color: 'red' }}>{formik.errors.Location}</span> : null}
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary : </label>
                    <input type="text" name="Salary" id="Salary" value={formik.values.Salary}
                        onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="EmailId">Employee EmailId : </label>
                    <input type="text" name="EmailId" id="EmailId" value={formik.values.EmailId}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                </p>
                <button type="submit">Create</button>
                {/* <Button variant="primary">Primary</Button>{' '} */}
            </form>
        </div>
    )
}

const element = <EmployeeComponent></EmployeeComponent>
ReactDOM.render(element, document.getElementById("root"));