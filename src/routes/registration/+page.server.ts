import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get("email")?.toString();
		const password = data.get("password")?.toString() || "";
		if (!email) {
			return fail(400, { email, missing: true });
		}

		await locals.auth.signIn(email, password);
		throw redirect(303, "/");
	},
} satisfies Actions;
