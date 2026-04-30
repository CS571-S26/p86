import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function LandmarkModal({ show, onHide, landmark }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{landmark.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{landmark.info}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}