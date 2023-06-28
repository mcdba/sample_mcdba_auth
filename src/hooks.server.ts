import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { authHandle } from '@mcdba/auth';
import { DB_PATH, EMAIL_FROM, EMAIL_SERVER, JWT_SECRET } from '$env/static/private';

const protectedRoute: Handle = async ({ event, resolve }) => {
	if (event.route.id?.startsWith('/(protected)')) {
		if (!event.locals.user) {
			// const message = "Вы должны авторизоваться для доступа к этой странице";
			// const redirectTo = event.url.pathname + event.url.search;
			// throw redirect(303, `/login?redirectTo=${redirectTo}&message=${message}`);
			throw redirect(303, `/login`);
		}
	}
	return await resolve(event);
};

export const handle = sequence(
	authHandle({
		dbPath: DB_PATH,
		jwtSecret: JWT_SECRET,
		// siteUrl: SITE_URL,
		emailFrom: EMAIL_FROM,
		emailServer: EMAIL_SERVER
	}),
	protectedRoute
);
