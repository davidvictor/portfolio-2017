let assetUrl, follow;

switch (process.env.NODE_ENV) {
	case 'production':
		assetUrl = 'https://assets.davidvictor.me';
		follow   = 'index,follow';
		break;
	case 'development':
		assetUrl = 'https://assets.davidvictor.me';
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

const scale = [0, 4, 8, 12, 16, 24, 32, 64, 72];

const fontSizes = [64, 48, 36, 24, 18, 16, 14, 13, 12, 11, 10];

const roleData = [
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

const resumeData = {
	experience:           [
		{
			id:       'e1',
			company:  'Amptube',
			role:     'Head of Product',
			location: 'Venice, CA',
			date:     '2016 - 2017',
			success:  [
				{
					id:          's1',
					title:       "End-to-end design",
					description: "for consumer facing, B2B, and internal products. Managed the implementation of business goals while maintaining a design process. Handled engineering delays and a bootstrapped startup environment to successfully ship the product on time."
				},
				{
					id:          's2',
					title:       "Frontend Architecture",
					description: "using leading libraries and platforms. Became fluent in JavaScript and mastered the art of interface building. Learned new technologies, like GraphQL, and dove deep into the Facebook and YouTube APIs. Continuously optimized site performance, reporting, and responsiveness."
				}
			]
		}, {
			id:       'e2',
			company:  "Vet On Demand",
			role:     "Chief Product Officer",
			location: "Santa Monica, CA",
			date:     "2014 - 2016",
			success:  [
				{
					id:          's1',
					title:       "End-to-end design",
					description: "for a veterinary telemedicine platform. Led the product development process from start to finish. Produced cross-platform interface designs for iOS & Android, the brochure website, and the vet web app interface. Validated the business case with extensive research. Contributed to the companie’s marketing plan and oversaw significant martech integrations."
				}
			]
		}, {
			id:       'e3',
			company:  "Environment Science Corporation",
			role:     "Lead Designer",
			location: "Nashville, TN",
			date:     "2013 - 2014",
			success:  [
				{
					id:          's1',
					title:       "Brand vocabulary",
					description: "for the largest environmental testing laboratory serving the entire United States from a single location. Designed reports for delivering defensible data."
				},
				{
					id:          's2',
					title:       "Interface designs",
					description: "for a complete rebuild of their laboratory management system, myESC. Created user journeys, functional specs, wireframes, and task inventories."
				}
			]
		}, {
			id:       'e4',
			company:  "Life is Beautiful Festival",
			role:     "Creative Director",
			location: "Las Vegas, NV",
			date:     "2012 - 2013",
			success:  [
				{
					id:          's1',
					title:       "Top-to-bottom Branding",
					description: "for the 2 day, 70k person music, food, art, and learning festival. Led a creative team to plan, design, and implement every branded and visual element from a national multimedia advertising campaign to the bathroom and exit signs."
				}
			]
		}, {
			id:       'e5',
			company:  "The Funky Umbrella",
			role:     "Principal",
			location: "Nashville, TN",
			date:     "2011 - 2012",
			success:  [
				{
					id:          's1',
					title:       "Boutique branding",
					description: "for a marketing and advertising agency specializing in making their clients look awesome. Designed logos, collateral, advertising, and websites for numerous local and regional small businesses."
				}
			]
		}, {
			id:       'e6',
			company:  "Iridium Development",
			role:     "User Interface Designer",
			location: "Nashville, TN",
			date:     "2010 - 2011",
			success:  [
				{
					id:          's1',
					title:       "Interface designs",
					description: "for a variety of iPhone and iPad applications including a Photoshop companion app, an interactive drink menu, and a graduate level economics learning platform."
				}
			]
		}
	],
	additionalExperience: [
		{
			id:       'ae1',
			company:  "Crispin Porter + Bogusky",
			role:     "Intern",
			location: "Boulder, CO",
			date:     "2007 - 2009",
			success:  [
				{
					id:          's1',
					title:       "Video Production Intern",
					description: "creating brand essence videos, award show videos, web videos, viral videos and campaign integrated video.  Worked with world class brands including Microsoft, Burger King, and Dominoes Pizza."
				}, {
					id:          's2',
					title:       "Account Planning Intern",
					description: "gaining experience in the field conducting ethnographic studies and interviews. Worked with world class brands including Volkswagen, Sprite, and Slim Jim."
				}
			]
		}
	],
	expertise:            ['Art Direction', 'Product Design', 'Product Management', 'Creative Direction', 'Branding', 'UX Design', 'UI Design', 'Mobile Web', 'Analytics'],
	technology:           ['HTML5', 'CSS3', 'ES6', 'Sass', 'Git', 'React', 'Redux', 'GraphQL', 'Webpack', 'Node', 'Express','Angular','Wordpress'],
	tools:                ['Sketch', 'Photoshop', 'Illustrator', 'InDesign', 'AfterEffects', 'Premiere', 'PaintCode', 'IntelliJ', 'Paw', 'Xcode', 'Terminal'],
	platforms:            ['FB Ads', 'FB Insights', 'Amazon S3', 'Cloudfront', 'Google Analytics', 'AdWords', 'YouTube', 'Stripe', 'New Relic', 'Mixpanel', 'Segment', 'SendGrid', 'MailChimp', 'HubSpot', 'Sentry', 'Fullstory', 'Appboy', 'Heap', 'Intercom', 'Iron.io', 'Twitter',]
};

module.exports = {
	siteUrl:   '//davidvictor.me',
	assetUrl:  assetUrl,
	follow:    follow,
	scale:     scale,
	colors:    colors,
	fontSizes: fontSizes,
	roleData:  roleData,
	resume:    resumeData,
	analytics: process.env.NODE_ENV === 'production',
	logs: process.env.NODE_ENV !== 'production',
};

//
//, {
//	id:       'ae2',
//		company:  "Habitat for Humanity",
//		role:     "Copywriter",
//		location: "Boulder, CO",
//		date:     "2006 - 2007",
//		success:  [
//		{
//			id:          's1',
//			title:       "Creative Story Teller",
//			description: "which became Flatirons Habitat’s “One Square Foot at a Time” campaign. Conducted SWOT analysis and assisted with strategic planning and a comprehensive, in-depth marketing plan."
//		}
//	]
//}
