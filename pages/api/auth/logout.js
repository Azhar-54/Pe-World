import { serialize } from 'cookie';

export default async function handler(req, res) {
	try {
		const cookie = serialize('token', '', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			expires: new Date(0),
			path: '/',
			sameSite: 'strict',
		});
		res.setHeader('Set-Cookie', cookie);
		res.status(200).json({ success: true, data: { user: null } });
	} catch (error) {
		console.log(error);
	}
}
