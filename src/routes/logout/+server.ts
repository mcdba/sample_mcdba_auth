import { error, redirect, type RequestHandler } from "@sveltejs/kit";

export const GET = (async (event) => {
	try {
		await event.locals.auth.logOut(event);
	} catch (err) {
		throw error(403, { message: "server err" });
	}
	throw redirect(303, "/");
}) satisfies RequestHandler;
