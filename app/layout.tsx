import type { Metadata } from "next";
import { Exo_2, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQHydrator from "@/components/faq-hydrator";
import { FAQ } from "./utils/config";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
			<body className="min-h-full flex flex-col text-surface">
				<FAQHydrator questions={FAQ} />

				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
