import "./index.css";

export default function Accordion({ qa, label }) {
	return (
		<section className='container accordion accordion--radio' id='ruels' aria-label={label}>
			{qa.map(({ question, answer }, index) => (
				<div className='tab' key={index}>
					<input type='radio' name='accordion-2' id={`rd${index}`} />
					<label htmlFor={`rd${index}`} className='tab__label'>
						{question}
					</label>
					<div className='tab__content'>
						<p>{answer}</p>
					</div>
				</div>
			))}
		</section>
	);
}
