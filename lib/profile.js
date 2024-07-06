import { PROFILE_URL } from '@/constants/url';

export async function getProfile(token) {
	try {
		const headers = new Headers();
		headers.set('Authorization', `Bearer ${token}`);
		const res = await fetch(PROFILE_URL, { headers });
		const profile = await res.json();
		return profile.data;
	} catch (error) {
		throw error;
	}
}
