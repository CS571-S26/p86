import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

import MapMover from './MapMover';
import MapResizer from './MapResizer';
import planeImg from '../../assets/plane.png';

export default function TravelMap({
    locations,
    currentIndex,
    currentLocation,
    planePosition,
    planeAngle,
    isAnimating,
    isMapExpanded
}) {
    const cityIcon = L.divIcon({
        html: `<div style="
            width: 12px;
            height: 12px;
            background-color: #264653;
            border: 1px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 6px rgba(0,0,0,0.35);
            opacity: 0.9;
        "></div>`,
        className: '',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
    });

    const activeCityIcon = L.divIcon({
        html: `<div style="
            width: 14px;
            height: 14px;
            background-color: #d97706;
            border: 1px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.45);
            opacity: 0.9;
        "></div>`,
        className: '',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });

    const planeIcon = L.divIcon({
        html: `<img 
            src="${planeImg}" 
            alt=""
            style="
                width: 38px;
                height: 38px;
                object-fit: contain;
                transform: rotate(${planeAngle + 90}deg);
                transition: transform 0.3s ease;
            "
        />`,
        className: '',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    });

    const olderTrail = locations
        .slice(0, Math.max(currentIndex, 1))
        .map(location => [location.lat, location.lng]);

    const mostRecentTrail = currentIndex > 0
        ? [
            [locations[currentIndex - 1].lat, locations[currentIndex - 1].lng],
            [locations[currentIndex].lat, locations[currentIndex].lng]
        ]
        : [];

    return (
        <MapContainer
            center={[currentLocation.lat, currentLocation.lng]}
            zoom={3}
            minZoom={2}
            maxZoom={10}
            scrollWheelZoom={false}
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapMover currentLocation={currentLocation} />
            <MapResizer isMapExpanded={isMapExpanded} />

            {!isAnimating && olderTrail.length > 1 && (
                <Polyline
                    positions={olderTrail}
                    pathOptions={{
                        color: '#264653',
                        weight: 3,
                        opacity: 0.7
                    }}
                />
            )}

            {!isAnimating && mostRecentTrail.length > 0 && (
                <Polyline
                    positions={mostRecentTrail}
                    pathOptions={{
                        color: '#d97706',
                        weight: 3,
                        opacity: 0.95
                    }}
                />
            )}

            {locations.map((location, index) => (
                <Marker
                    key={location.city}
                    position={[location.lat, location.lng]}
                    icon={index === currentIndex ? activeCityIcon : cityIcon}
                >
                    <Popup>
                        <strong>{location.city}</strong>
                        <br />
                        {location.time}
                    </Popup>
                </Marker>
            ))}

            <Marker position={planePosition} icon={planeIcon}>
                <Popup>
                    <strong>
                        {isAnimating
                            ? `Traveling to ${currentLocation.city}`
                            : `Currently in ${currentLocation.city}`}
                    </strong>
                    <br />
                    {currentLocation.time}
                </Popup>
            </Marker>
        </MapContainer>
    );
}