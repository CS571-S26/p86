import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function MapMover({ currentLocation }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo([currentLocation.lat, currentLocation.lng], 4, {
            duration: 1.2
        });
    }, [currentLocation, map]);

    return null;
}