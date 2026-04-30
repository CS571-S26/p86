import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm({ formData, onChange, onSubmit }) {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    placeholder="Write your message here..."
                    required
                />
            </Form.Group>

            <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </div>
        </Form>
    );
}