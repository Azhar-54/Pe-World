import { UPLOAD_URL } from '@/constants/url';

export async function uploadImage(file) {
	try {
		const res = await fetch(UPLOAD_URL, {
			method: 'POST',
			body: file,
		});
		if (!res.ok) {
			throw res.status;
		}
		const image = await res.json();
		return image.data;
	} catch (error) {
		console.log('Error: ', error);
		throw error;
	}
}
