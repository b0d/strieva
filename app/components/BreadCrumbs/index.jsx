import { useTranslations } from "next-intl";

const Breadcrumbs = ({ lng }) => {
	const t = useTranslations("HomePage"); // Load translations from the correct namespace

	// Define breadcrumbs with translations
	const breadcrumbs = [
		{ href: lng === "uk" ? "/" : `/${lng}`, name: t("mainh1") },
		{ href: lng === "uk" ? "/price" : `/${lng}/price`, name: t("price") },
	];

	return (
		<nav aria-label='breadcrumbs'>
			{breadcrumbs.map((crumb, index) => {
				const isLast = index === breadcrumbs.length - 1;
				return (
					<span key={crumb.href}>
						{index > 0 && " / "}
						{!isLast ? (
							<a href={crumb.href}>{crumb.name}</a> // Render as link if not the last breadcrumb
						) : (
							<span>{crumb.name}</span> // Render as plain text if it's the last breadcrumb
						)}
					</span>
				);
			})}
		</nav>
	);
};

export default Breadcrumbs;
