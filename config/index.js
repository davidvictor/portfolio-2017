let assetUrl, follow;

switch (process.env.NODE_ENV) {
	case 'production':
		assetUrl = '//d1x0bq6kwb2k3o.cloudfront.net';
		follow   = 'index,follow';
		break;
	default:
		assetUrl = '/images';
		follow   = 'noindex,nofollow';
}

const baseColors = {
	black:   '#111',
	white:   '#fff',
	gray:    '#ddd',
	midgray: '#888',
	gold:    'rgb(165, 127, 95)',
	blue:    '#08e',
	red:     '#f52',
	orange:  '#f70',
	green:   '#1c7'
};

const colors = {
	...baseColors,
	primary:   baseColors.black,
	secondary: baseColors.gold,
	default:   baseColors.black,
	info:      baseColors.blue,
	success:   baseColors.green,
	warning:   baseColors.orange,
	error:     baseColors.red
};

const scale = [0, 8, 16, 32, 64, 72];

const fontSizes = [64, 48, 24, 18, 16, 14, 13, 12, 11, 10];

module.exports = {
	siteUrl:   '//davidvictor.me',
	assetUrl:  assetUrl,
	follow:    follow,
	scale:     scale,
	colors:    colors,
	fontSizes: fontSizes,
};
