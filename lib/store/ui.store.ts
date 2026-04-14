import { create } from "zustand";

interface UIState {
	isLoading: boolean;

	updateIsLoading: (status: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
	isLoading: true,

	updateIsLoading: (status) => set({ isLoading: status }),
}));
