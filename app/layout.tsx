import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "cyrillic"],
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
			className={cn("h-full", "antialiased", inter.variable, "font-sans")}
		>
			<body className="min-h-full flex flex-col text-surface">
				<Header />
				{children}
			</body>
		</html>
	);
}
