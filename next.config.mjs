const rawBasePath = process.env.NEXT_BASE_PATH?.trim() || "";
const normalizedBasePath =
	rawBasePath && rawBasePath !== "/" ? rawBasePath : "";
const hasBasePath = Boolean(normalizedBasePath);
const trailingSlash = true;

export default {
	output: "export",
	reactStrictMode: true,
	trailingSlash,
	basePath: hasBasePath ? normalizedBasePath : undefined,
	assetPrefix: hasBasePath ? `${normalizedBasePath}/` : undefined,
	images: {
		unoptimized: true,
	},
};
