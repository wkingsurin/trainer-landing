import Card from "./card";

interface IProps {
	children: React.ReactNode;
}

export default function Icon({ children }: IProps) {
	return (
		<Card className="group w-[40px] min-h-[40px]! p-0! flex items-center justify-center bg-surface-50 backdrop-blur-2xl transition duration-[0.5s] hover:bg-accent!">
			{children}
		</Card>
	);
}
