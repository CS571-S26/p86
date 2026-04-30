import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import ContactForm from '../components/contact/ContactForm';
import ContactConfirmModal from '../components/contact/ContactConfirmModal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmModal(true);
    };

    const handleConfirmSubmit = () => {
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
        setShowConfirmModal(false);
        setSuccessMessage('Your message has been submitted!');
    };

    return (
        <Container className="mt-4 contact-page">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <h1 className="mb-3 travel-page-title">Contact Me</h1>

                    <p className="travel-subtitle mb-4">
                        Have a question, suggestion, or travel recommendation? Send me a message below!
                    </p>

                    <Card className="mb-4 blog-card">
                        <Card.Body>
                            <Card.Title className="mb-3">Send a Message</Card.Title>

                            <ContactForm
                                formData={formData}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                            />

                            {successMessage && (
                                <p role="status" className="text-success mt-3 mb-0">
                                    {successMessage}
                                </p>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <ContactConfirmModal
                show={showConfirmModal}
                formData={formData}
                onCancel={() => setShowConfirmModal(false)}
                onConfirm={handleConfirmSubmit}
            />
        </Container>
    );
}