import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/routing";
import BreadCrumbs from "../../components/BreadCrumbs/";
export async function generateMetadata({ params }) {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	return {
		title: t("welcome"),
		description: "ssss",
	};
}

export default async function PricePage({ params }) {
	const { locale } = await params;
	const t = await getTranslations("price");

	return (
		<div>
			<BreadCrumbs lng={locale} />
			<h1>{t("hello_world")}</h1>
			<p>{t("welcome")}</p>

			<p>
				<a href={locale === "ru" ? "/ru" : "/ru"}>ru</a>
			</p>
			<p>
				<a href={locale === "en" ? "/en" : "/en"}>en</a>
			</p>
			<p>
				<a href={locale === "uk" ? "/" : "/uk"}>uk</a>
			</p>
		</div>
	);
}
