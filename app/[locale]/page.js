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
		title: t("HomePage.mainh1"),
		description: "ssss",
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
						<h3>Шале з чаном Стрієва</h3>
						<table>
							<thead>
								<tr>
									<th scope='col'>Послуга</th>
									<th scope='col'>Вартість доби</th>
									<th scope='col'>Примітки</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row'>Оренда А-frame будинку (за 2 людей)</th>
									<td>3500 грн</td>
									<td>
										Ціна за 2 людей/1 доба. Додаткові гості оплачуються окремо.
										Максимум 4 дорослих.
									</td>
								</tr>
								<tr>
									<th scope='row'>Оренда закарпатського чану</th>
									<td>1500 грн</td>
									<td>Ціна вказана за добу. Безлім, без додатків.</td>
								</tr>

								<tr>
									<th scope='row'>Додатковий гість</th>
									<td>500 грн</td>
									<td>Ціна за +1 додаткового гостя.</td>
								</tr>

								<tr>
									<th scope='row'>Мангал</th>
									<td>0/200 грн</td>
									<td>
										За умови використання вугілля - безкоштовно. Є можливість
										придбати на місці.
									</td>
								</tr>
								<tr>
									<th scope='row'>Додатки до чану</th>
									<td colSpan='2'>
										<ul className='p-0'>
											<li>
												300 грн - Збір цілющих трав для чану: кропива, цвіт
												липи, чебрець, корінь кульбаби, м’ята, кора крушини,
												лист берези, череда, ромашка;
											</li>
											<li>250 грн - Чан з цитрусом: апельсин та грейпфрут;</li>
											<li>450 грн - Чан на молоці;</li>
											<li>
												600 грн - Чан на молоці з цитрусом(апельсин,
												грейфрутом).
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th scope='row'>Умови бронювання</th>
									<td colSpan='3'>
										Бронювання здійснюється при обовязковій умові передплати
										50%. Максимальна кількість дорослих - 4. Заселення 15:00.
										Виїзд - 11:00.
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
							<h3>Подобова оренда будинку</h3>
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
									вулиця Перемоги, 37,
									<br /> с. Стриєва, Житомирська область,
									<br /> Україна, 11777
									<br /> Тел: +38-097-017-37-37
								</address>
							</div>
						</div>
						<div className='col-12'>
							EcoHouse Strieva — це більше, ніж просто будиночок із чаном. Це
							місце, де створюються незабутні спогади, відновлюється гармонія і
							душевний спокій. Зняти будинок із чаном у нас — значить подарувати
							собі та близьким унікальний відпочинок, який ви захочете
							повторити!
						</div>
					</div>
				</section>
				<section className='container d-flex flex-row flex-wrap justify-content-between'>
					<span className='col-12 like-header p-2'>Поширені запитання:</span>

					<Accordion qa={qa} />
				</section>
			</main>
			<Footer lng={locale} />
		</>
	);
}
