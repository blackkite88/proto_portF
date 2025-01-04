import React from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
    return (
        <Form className="bg-light text-dark p-5 border shadow">
            <div className="row">
                <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                    <Form.Label className="w-100 text-start text-capitalize">First Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="lastName">
                    <Form.Label className="w-100 text-start text-capitalize">Last Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                    <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textArea">
                    <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" className="text-light" type="submit">Submit</Button>
        </Form>
    )
}


export default ContactForm;