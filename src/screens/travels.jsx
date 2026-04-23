import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Modal, Button } from 'react-bootstrap';

import taipeiImg from '../assets/taipei.png';
import seoulImg from '../assets/seoul.png';
import shanghaiImg from '../assets/shanghai.png';
import tokyoImg from '../assets/tokyo.png';
import shenzhenImg from '../assets/shenzhen.png';
import chongqingImg from '../assets/chongqing.png';
import hangzhouImg from '../assets/hangzhou.png';
import saigonImg from '../assets/saigon.png';

export default function Travels() {
    const locations = [
        {
            city: 'Taipei, Taiwan',
            time: 'August 2025',
            description: 'Location of Study Abroad',
            food: 'Beef Noodles, Bubble Tea, Stinky Tofu, Taiwanese Meatball',
            image: taipeiImg,
            landmark: {
                name: 'Taipei 101',
                x: '68%',
                y: '42%',
                info: 'Taipei 101 is one of the most iconic skyscrapers in Taiwan and a major landmark in Taipei. It is known for its towering height, modern design, and incredible views of the city.'
            }
        },
        {
            city: 'Seoul, South Korea',
            time: 'October 2025',
            description: 'First Trip with Friends',
            food: 'Korean BBQ, Kimchi, Bibimbap, Korean Corn Dogs',
            image: seoulImg,
            landmark: {
                name: 'Gyeongbokgung Palace',
                x: '60%',
                y: '60%',
                info: 'Gyeongbokgung Palace is one of the most famous royal palaces in South Korea and a historic symbol of Seoul. It is known for its traditional architecture, spacious courtyards, and cultural significance.'
            }
        },
        {
            city: 'Shanghai, China',
            time: 'October 2025',
            description: 'LoL World Championship Semifinals',
            food: 'Dim Sum, Peking Duck, Hot Pot, Chinese BBQ',
            image: shanghaiImg,
            landmark: {
                name: 'Oriental Pearl Tower',
                x: '28%',
                y: '35%',
                info: 'The Oriental Pearl Tower is one of the most recognizable landmarks in Shanghai and stands out in the city skyline. It is famous for its futuristic design and sweeping observation deck views.'
            }
        },
        {
            city: 'Tokyo, Japan',
            time: 'December 2025',
            description: 'Last Trip of the Year',
            food: 'Sushi, Ramen, Katsu, Gyudon',
            image: tokyoImg,
            landmark: {
                name: 'Mount Fuji',
                x: '68%',
                y: '55%',
                info: 'Mount Fuji is Japan’s most famous mountain and one of the country’s most iconic natural landmarks. It is admired for its nearly perfect shape and importance in Japanese culture and art.'
            }
        },
        {
            city: 'Shenzhen, China',
            time: 'December 2025',
            description: 'Christmas Trip with Family',
            food: 'Dim Sum, Peking Duck, Fish',
            image: shenzhenImg,
            landmark: {
                name: 'Window of the World',
                x: '42%',
                y: '48%',
                info: 'Window of the World is a popular theme park in Shenzhen that features miniature versions of famous landmarks from around the globe. It gives visitors a chance to experience many world attractions all in one place.'
            }
        },
        {
            city: 'Chong Qing, China',
            time: 'December 2025',
            description: 'Adventure with Family',
            food: 'Hotpot, Xiao Mien, Ma Po Tofu',
            image: chongqingImg,
            landmark: {
                name: 'Chongqing Drone Show',
                x: '50%',
                y: '39%',
                info: 'The Chongqing Drone Show is a well-known nighttime attraction featuring large-scale drone light displays across the city skyline. It is popular for its impressive visuals and for highlighting Chongqing’s modern atmosphere.'
            }
        },
        {
            city: 'Hangzhou, China',
            time: 'January 2025',
            description: 'Peaceful Destination in China',
            food: "Dongpo Pork, Longjing Shrimp, Beggar's Chicken",
            image: hangzhouImg,
            landmark: {
                name: 'West Lake',
                x: '46%',
                y: '58%',
                info: 'West Lake is the most famous scenic landmark in Hangzhou and is celebrated for its peaceful natural beauty. It is known for its bridges, temples, and deep cultural importance in Chinese history.'
            }
        },
        {
            city: 'Saigon (Ho Chi Minh City), Vietnam',
            time: 'January 2025',
            description: 'Last City of the Semester',
            food: 'Com Tam, Banh Bot Loc, Bun Rieu, Banh Xeo',
            image: saigonImg,
            landmark: {
                name: 'Ben Thanh Market',
                x: '32%',
                y: '58%',
                info: 'Ben Thanh Market is a historic market in Saigon and one of the city’s most well-known landmarks. It is famous for its lively atmosphere, traditional architecture, and wide variety of local goods and food.'
            }
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleSliderChange = (e) => {
        setCurrentIndex(Number(e.target.value));
        setShowModal(false);
    };

    const currentLocation = locations[currentIndex];

    return (
        <Container className="mt-4">
            <Row className="justify-content-center mb-4">
                <Col md={10} lg={8}>
                    <h1 className="travel-page-title mb-3">My Travels</h1>
                    <p className="travel-subtitle">
                        Use the slider to move through different locations from my travels!
                    </p>

                    <Form>
                        <Form.Label className="location-label">
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
                        <div style={{ position: 'relative' }}>
                            <Card.Img
                                variant="top"
                                src={currentLocation.image}
                                alt={currentLocation.city}
                                style={{ height: '400px', objectFit: 'cover' }}
                            />

                            <button
                                onClick={() => setShowModal(true)}
                                title={currentLocation.landmark.name}
                                className="landmark-dot"
                                style={{
                                    left: currentLocation.landmark.x,
                                    top: currentLocation.landmark.y
                                }}
                            />
                        </div>

                        <Card.Body>
                            <Card.Title>{currentLocation.city}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {currentLocation.time}
                            </Card.Subtitle>
                            <Card.Text>{currentLocation.description}</Card.Text>
                            <Card.Text className="food-text">
                                {currentLocation.food}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{currentLocation.landmark.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{currentLocation.landmark.info}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}