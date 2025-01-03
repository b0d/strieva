import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["uk"],
	defaultLocale: "uk",
	pathnames: {
		"/": "/", // Home
	},
	localePrefix: "as-needed", // Avoid redundant locale prefixes
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);
