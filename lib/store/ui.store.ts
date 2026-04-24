import { create } from "zustand";

export interface UIProps {
	modalOpen: boolean;
	appReady: boolean;
}

export interface UIState extends UIProps {
	setAppReady: (flag: boolean) => void;
	setModalOpen: (flag: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
	modalOpen: false,
	appReady: false,

	setAppReady: (flag) => set({ appReady: flag }),
	setModalOpen: (flag) => set({ modalOpen: flag }),
}));
