import { MAPS_EMBED_URL, MAPS_ROUTE_URL } from "@/lib/constants";

// Звичайний iframe з відкладеним завантаженням: без Maps JavaScript API та API-ключа
export default function Map({ messages = {} }) {
	const t = messages?.HomePage || {};

	return (
		<>
			<iframe
				src={MAPS_EMBED_URL}
				title={t.mapTitle}
				width='100%'
				height='400'
				style={{ border: 0, display: "block" }}
				loading='lazy'
				allowFullScreen
				referrerPolicy='no-referrer-when-downgrade'
			/>
			<a href={MAPS_ROUTE_URL} className='te-color d-inline-block pt-2'>
				{t.routeLink}
			</a>
		</>
	);
}
