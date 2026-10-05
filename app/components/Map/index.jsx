"use client";
import { useMemo, memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = memo(() => {
	const containerStyle = useMemo(
		() => ({
			width: "100%",
			height: "400px",
		}),
		[]
	);

	const center = useMemo(
		() => ({
			lat: 50.5198398,
			lng: 27.6271339,
		}),
		[]
	);

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} loading="lazy">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={14}
				options={{
					disableDefaultUI: false,
					zoomControl: true,
					streetViewControl: false,
					mapTypeControl: false,
				}}
			>
				<Marker position={center} title="EcoHouse Strieva" />
			</GoogleMap>
		</LoadScript>
	);
});

Map.displayName = 'Map';

export default Map;
