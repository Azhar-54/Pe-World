import { NextResponse } from 'next/server';

export function middleware(request) {
	const cookie = request.cookies.get('token')?.value;

	if (!cookie) {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/profile', '/recipes/add'],
};
