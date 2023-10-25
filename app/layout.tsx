import "../styles/globals.css";

export const metadata = {
	title: "Welcome to Jay's website",
	description: "personal website of Jaewoo Cho",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
