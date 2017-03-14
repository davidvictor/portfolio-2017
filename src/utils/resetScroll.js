import R from 'ramda';

export default function resetScroll(selector) {
	if (R.is(String, selector)) {
		const el = document.querySelector(selector);
		if (el) {
			el.scrollLeft = 0;
			el.scrollTop = 0;
		}
	}
}
