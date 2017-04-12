import MobileDetect from 'mobile-detect';

export default function isMobile() {
	const md = new MobileDetect(window.navigator.userAgent);
	return md.mobile();
}
