import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

export default function ContactConfirmModal({
    show,
    formData,
    onCancel,
    onConfirm
}) {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Message</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p className="mb-3">
                    Please review your message before sending.
                </p>

                <Card className="border-0 bg-light">
                    <Card.Body>
                        <p className="mb-2">
                            <strong>Name:</strong> {formData.name}
                        </p>

                        <p className="mb-2">
                            <strong>Email:</strong> {formData.email}
                        </p>

                        <p className="mb-0">
                            <strong>Message:</strong> {formData.message}
                        </p>
                    </Card.Body>
                </Card>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={onConfirm}>
                    Confirm Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
}