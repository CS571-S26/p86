import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default function About() {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <h1 className="mb-4">About Me</h1>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                                My name is Nathan Han, and I am a Computer Science and Data Science student at
                                the University of Wisconsin–Madison. My background includes experience in
                                software engineering, AI, data analytics, and research, with work spanning
                                React, Flask, Python, JavaScript, data pipelines, and NLP systems.
                            </Card.Text>
                            <Card.Text>
                                This project reflects both my personal interests and technical interests. It
                                combines storytelling, travel, and interactive design while also giving me a
                                way to build a meaningful full-stack style web project using tools I want to
                                grow in as a developer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}