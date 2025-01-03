import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/routing";
import Image from "next/image";
import MainFirstScreen from "../components/MainFirstScreen";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContentBlock from "../components/ContentBlock";
import WhatWeHave from "../components/WhatWeHave";
import MyGallery from "../components/MyGallery";
import Form from "../components/Form";
import Map from "../components/Map";
import "./global.css";
import Accordion from "../components/Accordion";
export async function generateMetadata({ params }) {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	return {
		title: t("HomePage.title"),
		description: t("HomePage.description"),
	};
}
export async function generateStaticParams() {
	const locales = ['en', 'uk', 'ru']; // Список доступних локалей
	return locales.map((locale) => ({ locale }));
}
export default async function LocalePage({ params }) {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const qa = Array.from({ length: 9 }, (_, i) => ({
		question: t(`questions.q${i}`),
		answer: t(`questions.a${i}`),
	}));

	const imagesCount = 19; // Кількість зображень
	const imgs = Array.from({ length: imagesCount }, (_, i) => ({
		src: t(`imgs.imgs${i}src`), // Отримує ключ imgs0src, imgs1src і т.д.
		alt: t(`imgs.imgs${i}alt`), // Отримує ключ imgs0alt, imgs1alt і т.д.
	}));

	let content = "content";

	return (
		<>
			<Header lng={locale} />
			<MainFirstScreen lng={locale} />

			<main>
				<ContentBlock lng={locale} content={content} />
				<WhatWeHave lng={locale} />
				<section
					className='container d-flex flex-row flex-wrap justify-content-between pb-5'
					id='price'
				>
					<div className='col-12'>
						<h3>{t("HomePage.h32")}</h3>
						<table>
							<thead>
								<tr>
									<th scope='col'>{t("HomePage.tableHeader1")}</th>
									<th scope='col'>{t("HomePage.tableHeader2")}</th>
									<th scope='col'>{t("HomePage.tableHeader3")}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row'>{t("HomePage.tableRow1")}</th>
									<td>{t("HomePage.tableRow1price")}</td>
									<td>
										{t("HomePage.tableRow1note")}
									</td>
								</tr>
								<tr>
									<th scope='row'>{t("HomePage.tableRow2")}</th>
									<td>{t("HomePage.tableRow2price")}</td>
									<td>{t("HomePage.tableRow2note")}</td>
								</tr>

								<tr>
									<th scope='row'>{t("HomePage.tableRow3")}</th>
									<td>{t("HomePage.tableRow3price")}</td>
									<td>{t("HomePage.tableRow3note")}</td>
								</tr>

								<tr>
									<th scope='row'>{t("HomePage.tableRow4")}</th>
									<td>{t("HomePage.tableRow4price")}</td>
									<td>
										{t("HomePage.tableRow4note")}
									</td>
								</tr>
								<tr>
									<th scope='row'>{t("HomePage.tableRow5")}</th>
									<td colSpan='2'>
										<ul className='p-0'>
											<li>
												{t("HomePage.tableRow5li1")}
											</li>
											<li>{t("HomePage.tableRow5li2")}</li>
											<li>{t("HomePage.tableRow5li3")}</li>
											<li>
												{t("HomePage.tableRow5li4")}
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th scope='row'>{t("HomePage.tableRow6")}</th>
									<td colSpan='3'>
										{t("HomePage.tableRow6note")}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className='col-12 pt-4' id='photos'>
						<MyGallery imgs={imgs} />
					</div>
					<div className='col-12 d-flex flex-row flex-wrap justify-content-between pt-4'>
						<div className='col-12'>
							address2
						</div>

						<div className='col-12 col-lg-7 py-3' id='howtofind'>
							<Map />
						</div>
						<div className='col-12 col-lg-5 d-flex flex-row flex-wrap'>
							<div className='col-12'>
								<Form />
							</div>

							<div className='col-12 p-2 d-flex flex-rowflex-wrap justify-content-start'>
								<a href='https://g.co/kgs/bCGmF1Y'>
									<Image
										src='/imgs/google.webp'
										width={30}
										height={30}
										alt='Feedback'
										className='m-3'
									/>
								</a>
								<address>
									{t("HomePage.address2")}
								</address>
							</div>
						</div>
						<div className='col-12'>
							{t("HomePage.address2p")}
						</div>
					</div>
				</section>
				<section className='container d-flex flex-row flex-wrap justify-content-between'>
					<span className='col-12 like-header p-2'>{t("HomePage.h34")}</span>

					<Accordion qa={qa} />
				</section>
			</main>
			<Footer lng={locale} />
		</>
	);
}
