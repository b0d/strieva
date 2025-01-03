export default function NotFound() {
	return (
		<html lang='en'>
			<head>
				<title>Page Not Found</title>
			</head>
			<body>
				<div style={{ textAlign: "center", marginTop: "50px" }}>
					<h1>404 - Page Not Found</h1>
					<p>The page you are looking for does not exist or has been moved.</p>
					<a href='/' style={{ textDecoration: "underline", color: "blue" }}>
						Go back to the homepage
					</a>
				</div>
			</body>
		</html>
	);
}
