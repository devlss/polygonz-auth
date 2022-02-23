const KEY_MESSAGE = process.env.REACT_APP_KEY_MESSAGE;
const TARGET_ORIGIN = new URL(process.env.REACT_APP_TARGET_ORIGIN || '');
const TARGET_ORIGIN_REGEXP = new RegExp(`.*${TARGET_ORIGIN.host}\/?$`, 'gi');

export function postAuthMessage(message?: string) {
	// TODO иногда проверка не проходит, нужно понять почему меняется referrer
	if (TARGET_ORIGIN_REGEXP.test(document.referrer) && window !== window.top) {
		console.debug('[post]');
		window.top?.postMessage(message || KEY_MESSAGE, '*');
	}
}
