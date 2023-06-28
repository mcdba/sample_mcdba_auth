import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
export const actions = {
	default: async (event) => {
		const { cookies, request, locals } = event;
		try {
			const data = await request.formData();
			const email = data.get("email")?.toString() || "";
			const password = data.get("password")?.toString() || "";
			await locals.auth.logIn(email, password, event);
		} catch (err) {
			return fail(400, { message: "Counld not login user" });
		}

		throw redirect(302, "/");
	},
} satisfies Actions;
