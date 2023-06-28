import { error, redirect } from "@sveltejs/kit";

import type { RequestHandler } from "../$types";

export const GET = (async ({ locals, params }) => {
	try {
		await locals.auth.activate(params.activationLink);
	} catch (err) {
		throw error(404, { message: "activation link not exist" });
	}
	throw redirect(303, "/login");
}) satisfies RequestHandler;
