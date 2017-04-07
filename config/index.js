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
		description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
	}, {
		id:          'creative',
		name:        "Creative Direction",
		icon:        `${assetUrl}/lionhouse/content.svg`,
		description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
	}, {
		id:          'branding',
		name:        "Branding",
		icon:        `${assetUrl}/lionhouse/content.svg`,
		description: "A strong visual identity gives your brand a personality that your clients will buy into from the onset. Defined brand guidelines keep your message consistent and trustworthy."
	}, {
		id:          'design',
		name:        "Design",
		icon:        `${assetUrl}/lionhouse/design.svg`,
		description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
	}, {
		id:          'ui',
		name:        "UI",
		icon:        `${assetUrl}/lionhouse/interface.svg`,
		description: "During the renaissance, philosophers poetically distinguished life from non-life with the terms “animate” and “in-animate”. Motion was living and possessed intention. Our approach to product development adheres to this philosophy. Well engineered interaction & movement, no matter how subtle, brings a product to life. Human experience exists within a natural world that is in constant motion and reacts to the smallest of changes, and that’s where LionHouse cultivates its ideas. If you see an element animate from the top of the screen, we’ve ensured its easing gains speed at the pixel equivalent of 9.8m/s2- why? Because, that’s gravity - you experience it everyday, and if presented differently, you're doing it wrong."
	}, {
		id:          'ux',
		name:        "UX",
		icon:        `${assetUrl}/lionhouse/scope.svg`,
		description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
	}, {
		id:          'code',
		name:        "Code",
		icon:        `${assetUrl}/lionhouse/develop.svg`,
		description: "An application that remembers is an application that is personal. It develops a relationship with the user - remembering her name, his preferences, and their history. It guides them through complex logic & functionality as if it were simple. It anticipates intentions and provides the next step as if it were always there; the user is quietly convinced that an entire site used by millions was written just for his/her needs. An application that remembers, can navigate complex encyclopedic volumes of knowledge and deliver contextually relevant information as easily as we remember the days of the week. An unfortunate irony is that in many projects designing this human remembrance is often forgotten. It is diminished to a few hours of technical thought about only the necessary datapoints and their first-glance relationships. "
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
