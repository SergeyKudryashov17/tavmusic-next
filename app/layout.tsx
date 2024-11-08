import { App } from "@/app";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
		<body>
			<App>
				<Header />

				<main>
					{ children }
				</main>

	            <Footer />
			</App>
		</body>
		</html>
	);
}
