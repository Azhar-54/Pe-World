const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.avif'];
export function isImageValid(image) {
	return IMAGE_EXTENSIONS.some(ext => image.toLowerCase().endsWith(ext));
}

export function getTokenFromLocalStorage() {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('token');
	}
}

export function validatePassword(pw) {
	return (
		/[A-Z]/.test(pw) &&
		/[a-z]/.test(pw) &&
		/[0-9]/.test(pw) &&
		/[^A-Za-z0-9]/.test(pw) &&
		pw.length > 4
	);
}

export function validateName(name) {
	return name.length > 5;
}

export function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}
