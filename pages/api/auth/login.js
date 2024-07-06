import { login } from '@/lib/auth';
import { serialize } from 'cookie';

export default async function handler(req, res) {
	try {
		const { email, password } = req.body;
		const response = await login({ email, password });
		const responseJson = await response.json();
		const token = responseJson.data.token;

		const cookie = serialize('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60, // One hour
			path: '/',
			sameSite: 'strict',
		});
		res.setHeader('Set-Cookie', cookie);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(401).json({ message: error.message });
	}
}
