import type { Metadata } from "next";
import "../styling/app.css";

export const metadata: Metadata = {
	title: "Katherine Connolly",
	description: "Connkat: Software Development Handled",
	openGraph: {
		title: "Connkat: Software Development Handled",
		description:
			"Concatenation: link together in a chain or series. I believe that I concatenate creativity and engineering within my software solutions.",
		images: ["/preview.png"],
	},
	icons: {
		icon: "/logo-square.png",
		apple: "/logo-square.png",
	},
	manifest: "/manifest.json",
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
