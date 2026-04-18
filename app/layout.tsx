import type { Metadata } from "next";
import { Exo_2, Roboto } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { FAQ } from "./utils/config";

import { cookies } from "next/headers";

import Header from "@/components/header";
import Footer from "@/components/footer";

import FAQHydrator from "@/components/faq-hydrator";

import LoadingScreen from "@/components/widgets/loading-screen/loading-screen";
import VisitProvider from "@/components/contexts/visit-context";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin", "cyrillic"],
});
const exo2 = Exo_2({
	variable: "--font-exo_2",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Trainer Landing page",
	description: "Landing page for fitness trainer",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const hasVisited = Boolean(cookieStore.get("has_visited")?.value);

	return (
		<html
			lang="ru"
			className={cn(
				"h-full",
				"antialiased",
				exo2.variable,
				roboto.variable,
				"font-sans"
			)}
		>
			<body
				className={`relative min-h-full flex flex-col text-surface ${
					!hasVisited && "overflow-hidden"
				}`}
			>
				<FAQHydrator questions={FAQ} />

				<VisitProvider initialValue={hasVisited}>
					{hasVisited ? null : <LoadingScreen />}
					<Header />
					{children}
					<Footer />
				</VisitProvider>
			</body>
		</html>
	);
}
