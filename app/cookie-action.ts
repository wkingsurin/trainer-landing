"use server";

import { cookies } from "next/headers";

export async function setCookie() {
	const cookieStore = await cookies();

	cookieStore.set("has_visited", "true", {
		secure: true,
		httpOnly: true,
	});
}

export async function getCookie() {
	const cookieStore = await cookies();
	console.log(`[cookieStore]:`, cookieStore);

	return Boolean(cookieStore.get("has_visited")?.value);
}
