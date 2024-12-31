"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
	const containerStyle = {
		width: "100%",
		height: "400px",
	};

	const center = {
		lat: 50.5198398, // Широта
		lng: 27.6271339, // Довгота
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
