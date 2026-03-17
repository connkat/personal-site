import React from "react";
import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import { URL } from "node:url";
import "../styling/app.css";

const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-crimson-pro",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://connkat.com"),
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
		<html lang="en" className={crimsonPro.variable}>
			<body>{children}</body>
		</html>
	);
}
