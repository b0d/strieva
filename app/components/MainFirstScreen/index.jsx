import "./index.css";
import Form from "../Form";

export default function MainFirstScreen({ lng, messages }) {
	const t = messages.HomePage;

	return (
		<section className='first-main-screen d-flex align-content-center flex-row flex-wrap justify-content-center'>
			<div className='col-12 col-md-12 col-xl-7 col-xxl-7 ms-auto'>
				<h1>{t.h1}</h1>
				<div className='col-12 col-sm-10 col-lg-7 d-flex flex-column align-items-center'>
					<Form messages={messages} locale={lng} location='hero' />
				</div>
			</div>
		</section>
	);
}
