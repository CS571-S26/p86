import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

export default function Travels() {
    const locations = [
        {
            city: 'Taipei, Taiwan',
            time: 'August 20th, 2025',
            description: 'Location of Study Abroad',
            food: 'Beef Noodels, Bubble Tea, Stinky Tofu, Taiwanese Meatball',
            image: ''
        },
        {
            city: 'Seoul, South Korea',
            time: 'October 2025',
            description: 'First Trip with Friends',
            food: 'Korean BBQ, Kimchi, Bibimbap, Korean Corn Dogs',
            image: ''
        },
        {
            city: 'Tokyo, Japan',
            time: 'December 2025',
            description: 'Last Trip of the Year',
            food: 'Sushi, Ramen, Katsu, Gyudon',
            image: ''
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSliderChange = (e) => {
        setCurrentIndex(Number(e.target.value));
    };

    const currentLocation = locations[currentIndex];

    return (
        <Container className="mt-4">
            <Row className="justify-content-center mb-4">
                <Col md={10} lg={8}>
                    <h1 className="mb-3">My Travels</h1>
                    <p className="text-muted">
                        Use the slider to move through different locations from my travels!
                    </p>

                    <Form>
                        <Form.Label>
                            Trip Stop: <strong>{currentLocation.city}</strong>
                        </Form.Label>
                        <Form.Range
                            min={0}
                            max={locations.length - 1}
                            step={1}
                            value={currentIndex}
                            onChange={handleSliderChange}
                        />
                    </Form>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={currentLocation.image}
                            alt={currentLocation.city}
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>{currentLocation.city}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {currentLocation.time}
                            </Card.Subtitle>
                            <Card.Text>{currentLocation.description}</Card.Text>
                            <Card.Text>{currentLocation.food}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}