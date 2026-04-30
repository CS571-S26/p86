import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import locations from '../data/travellocations';
import TravelSlider from '../components/travels/TravelSlider';
import TravelInfo from '../components/travels/TravelInfo';
import TravelMap from '../components/travels/TravelMap';
import LandmarkModal from '../components/travels/LandmarkModal';

export default function Travels() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isMapExpanded, setIsMapExpanded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentLocation = locations[currentIndex];

    const previousIndexRef = useRef(0);
    const fullMapRef = useRef(null);

    const [planePosition, setPlanePosition] = useState([
        locations[0].lat,
        locations[0].lng
    ]);

    const [planeAngle, setPlaneAngle] = useState(20);

    const handleSliderChange = (e) => {
        previousIndexRef.current = currentIndex;
        setCurrentIndex(Number(e.target.value));
        setShowModal(false);
    };

    const handleFullMapClick = () => {
        setIsMapExpanded(true);

        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }, 150);
    };

    const calculateMapAngle = (start, end) => {
        const lngDiff = end.lng - start.lng;
        const latDiff = end.lat - start.lat;

        const screenX = lngDiff;
        const screenY = -latDiff;

        return Math.atan2(screenY, screenX) * 180 / Math.PI;
    };

    useEffect(() => {
        const startLocation = locations[previousIndexRef.current];
        const endLocation = locations[currentIndex];

        const newAngle = calculateMapAngle(startLocation, endLocation);
        setPlaneAngle(newAngle);
        setIsAnimating(true);

        let animationFrame;
        const duration = 1200;
        const startTime = performance.now();

        const animatePlane = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const lat =
                startLocation.lat +
                (endLocation.lat - startLocation.lat) * progress;

            const lng =
                startLocation.lng +
                (endLocation.lng - startLocation.lng) * progress;

            setPlanePosition([lat, lng]);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animatePlane);
            } else {
                setIsAnimating(false);
            }
        };

        animationFrame = requestAnimationFrame(animatePlane);

        return () => cancelAnimationFrame(animationFrame);
    }, [currentIndex]);

    const travelMap = (
        <TravelMap
            locations={locations}
            currentIndex={currentIndex}
            currentLocation={currentLocation}
            planePosition={planePosition}
            planeAngle={planeAngle}
            isAnimating={isAnimating}
            isMapExpanded={isMapExpanded}
        />
    );

    return (
        <Container className="mt-4">
            <Row className="justify-content-center mb-4">
                <Col md={10} lg={8}>
                    <h1 className="travel-page-title mb-3">My Travels</h1>

                    <p className="travel-subtitle">
                        Take a step into my travels this year! Use the slider to explore the different cities I visited.
                    </p>

                    <TravelSlider
                        locations={locations}
                        currentIndex={currentIndex}
                        currentLocation={currentLocation}
                        onSliderChange={handleSliderChange}
                    />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={10} lg={9}>
                    <Card>
                        {!isMapExpanded && (
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
                                    aria-label={`Learn more about ${currentLocation.landmark.name}`}
                                    className="landmark-dot"
                                    style={{
                                        left: currentLocation.landmark.x,
                                        top: currentLocation.landmark.y
                                    }}
                                />
                            </div>
                        )}

                        <Card.Body>
                            {isMapExpanded ? (
                                <div>
                                    <div className="mb-3">
                                        <Card.Title>{currentLocation.city}</Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted">
                                            {currentLocation.time}
                                        </Card.Subtitle>

                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="mt-2"
                                            onClick={() => setIsMapExpanded(false)}
                                        >
                                            Exit Full Map
                                        </Button>
                                    </div>

                                    <div
                                        ref={fullMapRef}
                                        role="region"
                                        aria-label={`Map showing travel route to ${currentLocation.city}`}
                                        style={{
                                            width: '100%',
                                            height: '500px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            border: '1px solid #ddd'
                                        }}
                                    >
                                        {travelMap}
                                    </div>
                                </div>
                            ) : (
                                <Row className="align-items-stretch">
                                    <Col md={6} className="mb-3 mb-md-0">
                                        <TravelInfo
                                            currentLocation={currentLocation}
                                            onFullMapClick={handleFullMapClick}
                                        />
                                    </Col>

                                    <Col md={6} className="d-flex justify-content-center align-items-center">
                                        <div
                                            role="region"
                                            aria-label={`Map showing travel route to ${currentLocation.city}`}
                                            style={{
                                                width: 'min(440px, 100%)',
                                                height: '340px',
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                border: '1px solid #ddd'
                                            }}
                                        >
                                            {travelMap}
                                        </div>
                                    </Col>
                                </Row>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <LandmarkModal
                show={showModal}
                onHide={() => setShowModal(false)}
                landmark={currentLocation.landmark}
            />
        </Container>
    );
}