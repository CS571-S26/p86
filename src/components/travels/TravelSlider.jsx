import React from 'react';
import { Form } from 'react-bootstrap';

export default function TravelSlider({
    locations,
    currentIndex,
    currentLocation,
    onSliderChange
}) {
    return (
        <Form>
            <Form.Label className="location-label">
                Trip Stop: <strong>{currentLocation.city}</strong>
            </Form.Label>

            <Form.Range
                aria-label="Select trip stop"
                min={0}
                max={locations.length - 1}
                step={1}
                value={currentIndex}
                onChange={onSliderChange}
            />
        </Form>
    );
}