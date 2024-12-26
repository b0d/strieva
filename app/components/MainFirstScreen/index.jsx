import "./index.css";
import Form from "../Form";
export default function MainFirstScreen({ lng }) {
	return (
		<section className='first-main-screen d-flex align-content-center flex-row flex-wrap justify-content-center'>
			<div className='col-12 col-md-8 col-xl-7 col-xxl-7 ms-auto'>
				<h1>Відпочинок у А-фрейм будинку із закарпатським чаном</h1>
				<div className='col-10 d-flex flex-column align-items-center'>
					<Form />
				</div>
			</div>
		</section>
	);
}
