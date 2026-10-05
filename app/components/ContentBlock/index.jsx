import "./index.css";

export default function ContentBlock({ lng, content, messages }) {
	const t = messages.HomePage;

	return (
		<section className='container d-flex flex-row flex-wrap justify-content-between py-5'>
			<div className='col-12 col-lg-8 pr-3'>
				<h2>{t.h2}</h2>
				<p>{t.h2p1}</p>
				<p>{t.h2p2}</p>
				<p>{t.h2p3}</p>
				<p>{t.h2p4}</p>
			</div>
			<div className='col-12 col-lg-4 d-flex justify-content-center'>
				<video
					width='320'
					height='480'
					controls
					preload='none'
					poster='/imgs/IMG_6550.webp'
					aria-label="EcoHouse Strieva overview video"
				>
					<source src='/video/Eco-house-Strieva.MOV' type='video/mp4' />
					Ваш браузер не підтримує відео.
				</video>
			</div>
		</section>
	);
}
