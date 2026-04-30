import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function TravelInfo({ currentLocation, onFullMapClick }) {
    return (
        <div className="d-flex flex-column h-100">
            <div>
                <Card.Title>{currentLocation.city}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    {currentLocation.time}
                </Card.Subtitle>

                <Card.Text>{currentLocation.description}</Card.Text>

                <Card.Text className="food-text">
                    {currentLocation.food}
                </Card.Text>

                <p className="mb-0">
                    Currently in <strong>{currentLocation.city}</strong>
                </p>
            </div>

            <div className="mt-auto">
                <Button
                    size="sm"
                    onClick={onFullMapClick}
                    style={{
                        backgroundColor: 'var(--navy)',
                        borderColor: 'var(--navy)',
                        color: 'white'
                    }}
                >
                    Full Map
                </Button>
            </div>
        </div>
    );
}