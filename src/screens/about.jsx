import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AboutProfileCard from '../components/about/AboutProfileCard';

export default function About() {
    return (
        <Container className="mt-4 about-page">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <h1 className="mb-4 travel-page-title">About Me</h1>

                    <AboutProfileCard />
                </Col>
            </Row>
        </Container>
    );
}