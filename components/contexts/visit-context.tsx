"use client";

import { createContext, useContext, useState } from "react";

interface IVisitContext {
	visit: boolean;
	setVisit: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisitContext = createContext<IVisitContext | null>(null);

interface IProps {
	children: React.ReactNode;
	initialValue: boolean;
}

export default function VisitProvider({ children, initialValue }: IProps) {
	const [visit, setVisit] = useState<boolean>(initialValue);
	return (
		<VisitContext.Provider value={{ visit, setVisit }}>
			{children}
		</VisitContext.Provider>
	);
}

export const useVisit = () => {
	const context = useContext(VisitContext);
	if (!context) {
		throw new Error("useVisit must be used within a VisitProvider");
	}
	return context;
};
