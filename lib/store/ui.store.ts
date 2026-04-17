import { create } from "zustand";

export interface UIProps {
	appReady: boolean;
}

export interface UIState extends UIProps {
	setAppReady: (flag: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
	appReady: false,

	setAppReady: (flag) => set({ appReady: flag }),
}));
