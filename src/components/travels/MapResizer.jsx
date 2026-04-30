import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function MapResizer({ isMapExpanded }) {
    const map = useMap();

    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 250);
    }, [isMapExpanded, map]);

    return null;
}