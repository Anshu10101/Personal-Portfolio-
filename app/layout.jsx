import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Anshul | Portofolio",
	description:
		"My name is Anshul, I'm a Software Engineer and I'm passionate about it. I'm currently studying at SRMIST Chennai.",
	author: "Anshul",
	siteUrl: "",
	applicationName: "Anshul | Portofolio",
	keywords: [
		"Anshuls",
		"Anshul",
		"Anshul Yadav",
		"Yadav",
		"Anshul Yadav",
		"Anshul Yadav",
		"bloodfallen",
		"Anshul porto",
		"Anshul um",
	],
	openGraph: {
		type: "website",
		url: "",
		title: "Anshul | Portofolio",
		site_name: "Anshul | Portofolio",
		description: "My name is Anshul, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Anshul Portofolio",
			},
		],
		site_name: "Anshul | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
