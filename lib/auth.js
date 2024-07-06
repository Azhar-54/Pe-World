import { LOGIN_URL, REGISTER_URL } from '@/constants/url';

export async function register({ name, email, phone, password }) {
	try {
		const user = { name, email, phone, password };
		const res = await fetch(REGISTER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		if (!res.ok) {
			throw new Error(res.status);
		}
		return res;
	} catch (error) {
		console.log(error);
		switch (error.message) {
			case '403':
				throw new Error(
					`Email "${email}" has already been used. Please use another email!.`
				);
		}
	}
}

export async function login({ email, password }) {
	try {
		const user = { email, password };
		const res = await fetch(LOGIN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		if (!res.ok) {
			throw new Error(res.status);
		}
		return res;
	} catch (error) {
		switch (error.message) {
			case '403':
				throw new Error('Email or password is incorrect');
		}
	}
}
