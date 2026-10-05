import "./index.css";

export default function Accordion({ qa }) {
	return (
		<section className='container accordion accordion--radio' id='ruels' aria-label='Frequently asked questions'>
			{qa.map(({ question, answer }, index) => (
				<div className='tab' key={index}>
					<input type='radio' name='accordion-2' id={`rd${index}`} />
					<label htmlFor={`rd${index}`} className='tab__label' aria-expanded='false'>
						{question}
					</label>
					<div className='tab__content' role='region' aria-labelledby={`rd${index}`}>
						<p>{answer}</p>
					</div>
				</div>
			))}
		</section>
	);
}
