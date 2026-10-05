import Image from "next/image";
import Header from "./Header";
import MainFirstScreen from "./MainFirstScreen";
import ContentBlock from "./ContentBlock";
import WhatWeHave from "./WhatWeHave";
import MyGallery from "./MyGallery";
import Form from "./Form";
import Map from "./Map";
import Accordion from "./Accordion";
import Footer from "./Footer";
import StructuredData from "./StructuredData";

export default function LocalePageContent({ locale, messages = {} }) {
	const home = messages?.HomePage || {};
	const questionSet = messages?.questions || {};
	const gallery = messages?.imgs || {};

	const qa = Array.from({ length: 9 }, (_, i) => ({
		question: questionSet[`q${i}`],
		answer: questionSet[`a${i}`],
	}));

	const imagesCount = 19;
	const imgs = Array.from({ length: imagesCount }, (_, i) => ({
		src: gallery[`imgs${i}src`],
		alt: gallery[`imgs${i}alt`],
	}));

	const content = home.title ?? 'Strieva';

	return (
		<>
			<StructuredData locale={locale} messages={messages} />
			<Header lng={locale} messages={messages} />
			<MainFirstScreen lng={locale} messages={messages} />
			<main>
				<ContentBlock lng={locale} messages={messages} content={content} />
				<WhatWeHave lng={locale} messages={messages} />
				<section
					className="container d-flex flex-row flex-wrap justify-content-between pb-5"
					id="price"
				>
					<div className="col-12">
						<h3>{home.h32}</h3>
						<table>
							<thead>
								<tr>
									<th scope="col">{home.tableHeader1}</th>
									<th scope="col">{home.tableHeader2}</th>
									<th scope="col">{home.tableHeader3}</th>
								</tr>
							</thead>
							<tbody>
								{[1, 2, 3, 4].map((row) => (
									<tr key={row}>
										<th scope="row">{home[`tableRow${row}`]}</th>
										<td>{home[`tableRow${row}price`]}</td>
										<td>{home[`tableRow${row}note`]}</td>
									</tr>
								))}
								<tr>
									<th scope="row">{home.tableRow5}</th>
									<td colSpan="2">
										<ul className="p-0">
											{[1, 2, 3, 4].map((i) => (
												<li key={i}>{home[`tableRow5li${i}`]}</li>
											))}
										</ul>
									</td>
								</tr>
								<tr>
									<th scope="row">{home.tableRow6}</th>
									<td colSpan="3">{home.tableRow6note}</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="col-12 pt-4" id="photos">
						<MyGallery imgs={imgs} />
					</div>

					<div className="col-12 d-flex flex-row flex-wrap justify-content-between pt-4">
						<div className="col-12">{home.h33}</div>

						<div className="col-12 col-lg-7 py-3" id="howtofind">
							<Map />
						</div>

						<div className="col-12 col-lg-5 d-flex flex-row flex-wrap">
							<div className="col-12">
								<Form messages={messages} />
							</div>

							<div className="col-12 p-2 d-flex flex-row flex-wrap justify-content-start">
								<a href="https://g.co/kgs/bCGmF1Y">
									<Image
										src="/imgs/google.webp"
										width={30}
										height={30}
										alt="Feedback"
										className="m-3"
									/>
								</a>
								<address>{home.address2}</address>
							</div>
						</div>

						<div className="col-12">{home.address2p}</div>
					</div>
				</section>

				<section className="container d-flex flex-row flex-wrap justify-content-between">
					<span className="col-12 like-header p-2">{home.h34}</span>
					<Accordion qa={qa} />
				</section>
			</main>
			<Footer lng={locale} messages={messages} />
		</>
	);
}
