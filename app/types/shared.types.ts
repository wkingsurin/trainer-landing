export interface IOffer {
	title: string;
	tag: string;
	price: string;
	imageSrc: string;
	imageAlt: string;
	description: { text: string }[];
}

export interface IAbout {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
}
