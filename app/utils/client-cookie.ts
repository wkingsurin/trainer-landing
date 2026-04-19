import Cookies from "js-cookie";

export const setHasVisited = () => {
	Cookies.set("has_visited", "true", { secure: true });
};
