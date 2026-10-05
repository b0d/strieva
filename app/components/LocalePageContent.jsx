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
import MobileContactBar from "./MobileContactBar";
import StructuredData from "./StructuredData";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { GALLERY_IMAGES } from "@/lib/gallery";

export default function LocalePageContent({ locale, messages = {} }) {
	const home = messages?.HomePage || {};
	const questionSet = messages?.questions || {};
	const gallery = messages?.imgs || {};

	// Усі пари q{i}/a{i} з перекладів: той самий список іде і в акордеон, і в розмітку FAQ
	const qa = Object.keys(questionSet)
		.filter((key) => /^q\d+$/.test(key) && questionSet[`a${key.slice(1)}`])
		.map((key) => ({
			question: questionSet[key],
			answer: questionSet[`a${key.slice(1)}`],
		}));

	const imgs = GALLERY_IMAGES.map((img, i) => ({
		...img,
		alt: gallery[`imgs${i}alt`],
	}));

	const content = home.title ?? 'Strieva';

	return (
		<>
			<StructuredData locale={locale} messages={messages} qa={qa} />
			<div className="first-screen">
				<Header lng={locale} messages={messages} />
				<MainFirstScreen lng={locale} messages={messages} />
			</div>
			<main>
				<ContentBlock lng={locale} messages={messages} content={content} />
				<WhatWeHave lng={locale} messages={messages} />
				<section
					className="container d-flex flex-row flex-wrap justify-content-between pb-5"
					id="price"
				>
					<div className="col-12">
						<h2 className="h3">{home.h32}</h2>
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
									<td colSpan="2">{home.tableRow6note}</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="col-12 pt-4" id="photos">
						<MyGallery imgs={imgs} label={home.menu3} />
					</div>

					<div className="col-12 d-flex flex-row flex-wrap justify-content-between pt-4">
						<h2 className="col-12 h3">{home.h33}</h2>

						<div className="col-12 col-lg-7 py-3" id="howtofind">
							<Map messages={messages} />
						</div>

						<div className="col-12 col-lg-5 d-flex flex-row flex-wrap">
							<div className="col-12">
								<Form messages={messages} locale={locale} location="contacts" />
							</div>

							<div className="col-12 p-2 d-flex flex-row flex-wrap justify-content-start">
								<a href={GOOGLE_REVIEWS_URL}>
									<Image
										src="/imgs/google.webp"
										width={30}
										height={30}
										alt={home.reviewsAlt}
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
					<h2 className="col-12 like-header p-2">{home.h34}</h2>
					<Accordion qa={qa} label={home.menu5} />
				</section>
			</main>
			<Footer lng={locale} messages={messages} />
			<MobileContactBar messages={messages} />
		</>
	);
}
