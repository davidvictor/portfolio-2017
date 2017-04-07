let assetUrl, follow;

switch (process.env.NODE_ENV) {
	case 'production':
		assetUrl = '//d1x0bq6kwb2k3o.cloudfront.net';
		follow   = 'index,follow';
		break;
	case 'development':
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
	red:     'red',
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

const scale = [0, 4, 8, 12, 24, 32, 64, 72];

const fontSizes = [64,48,36,24, 18, 16, 14, 13, 12, 11, 10];

const roleData    = [
	{
		id:          'strategy',
		name:        "Strategy",
		icon:        `${assetUrl}/lionhouse/strategy.svg`,
		description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal."
	}, {
		id:          'creative',
		name:        "Creative Direction",
		icon:        `${assetUrl}/lionhouse/content.svg`,
		description: "Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
	}, {
		id:          'branding',
		name:        "Branding",
		icon:        `${assetUrl}/lionhouse/content.svg`,
		description: "A strong visual identity gives your brand a personality that your clients will buy into from the onset. Defined brand guidelines keep your message consistent and trustworthy."
	}, {
		id:          'design',
		name:        "Design",
		icon:        `${assetUrl}/lionhouse/design.svg`,
		description: "Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
	}, {
		id:          'ui',
		name:        "UI",
		icon:        `${assetUrl}/lionhouse/interface.svg`,
		description: "Farm-to-table tbh readymade helvetica XOXO iPhone. XOXO plaid disrupt woke, snackwave flannel tattooed biodiesel affogato poutine messenger bag keytar butcher chicharrones ennui. Flexitarian salvia schlitz YOLO keytar."
	}, {
		id:          'ux',
		name:        "UX",
		icon:        `${assetUrl}/lionhouse/scope.svg`,
		description: "Etsy pok pok raclette viral ethical. Tofu irony trust fund readymade, occupy YOLO locavore try-hard health goth cold-pressed put a bird on it leggings cred shabby chic. Shabby chic post-ironic ennui hoodie messenger bag."
	}, {
		id:          'code',
		name:        "Code",
		icon:        `${assetUrl}/lionhouse/develop.svg`,
		description: "Keytar tattooed polaroid affogato synth fam jean shorts. 3 wolf moon tacos polaroid artisan food truck butcher. Microdosing seitan irony, chillwave glossier stumptown dreamcatcher lumbersexual."
	}
];

module.exports = {
	siteUrl:   '//davidvictor.me',
	assetUrl:  assetUrl,
	follow:    follow,
	scale:     scale,
	colors:    colors,
	fontSizes: fontSizes,
	roleData: roleData,
};
