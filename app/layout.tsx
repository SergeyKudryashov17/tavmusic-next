'use client';

import { App } from "@/app";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import {AntdRegistry} from "@ant-design/nextjs-registry";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
		<body>
			<App>
				<AntdRegistry>
					<Header />

					<main>
						{ children }
					</main>

					<Footer />
				</AntdRegistry>
			</App>
		</body>
		</html>
	);
}
