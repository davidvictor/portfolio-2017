import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import Project from '../../project';
import Hero from '../../project/hero';
import Heading from '../../project/heading';
import ImageZoom from 'react-medium-image-zoom';
import YouTube from 'react-youtube';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const Logos = () => {
	const classes = classNames(style.logos);
	return (
		<div className={classes}>
			<Flex justify="space-around" my={5} wrap>
				<Box p={2}>
					<img className={style.logoH} src={`${assetUrl}/vetondemand/logo-h.svg`} alt="Logo"/>
				</Box>
				<Box p={2}>
					<img className={style.logoV} src={`${assetUrl}/vetondemand/logo-v.svg`} alt="Logo"/>
				</Box>
			</Flex>
		</div>
	)
};

const Type = () => {
	const classes = classNames(style.type);
	return (
		<div className={classes}>
			<Flex justify="space-around" wrap my={5}>
				<Box p={2}>
					<img className={style.type1} src={`${assetUrl}/vetondemand/font-proxima.png`} alt="Typeface"/>
				</Box>
				<Box p={2}>
					<img className={style.type2} src={`${assetUrl}/vetondemand/font-gotham.png`} alt="Typeface"/>
				</Box>
			</Flex>
		</div>
	)
};

const Palette = () => {
	const colors = [
		{
			name: 'purple'
		}, {
			name: 'gold'
		}, {
			name: 'grey1'
		}, {
			name: 'gunmetal'
		}
	];
	return (
		<div>
			<Flex justify="center" my={4}>
				{colors.map((color, idx) =>
					<Box key={idx}>
						<div className={`color-card ${color.name} ${style.colorCard}`}>
							<div className="color-preview "></div>
							<div className="color-shades"></div>
						</div>
					</Box>
				)}
			</Flex>
		</div>
	)
};

const Photos = () => {
	const photos        = [{
		src:  `${assetUrl}/vetondemand/photo/brand-1-sm.jpg`,
		zoom: `${assetUrl}/vetondemand/photo/brand-1.jpg`,
	}, {
		src:  `${assetUrl}/vetondemand/photo/girl-window-dog-hug-sm.jpg`,
		zoom: `${assetUrl}/vetondemand/photo/girl-window-dog-hug.jpg`,
	}, {
		src:  `${assetUrl}/vetondemand/photo/vet-office-dog-examine-sm.jpg`,
		zoom: `${assetUrl}/vetondemand/photo/vet-office-dog-examine.jpg`,
	}, {
		src:  `${assetUrl}/vetondemand/photo/dog-bed-covers-feet-sm.jpg`,
		zoom: `${assetUrl}/vetondemand/photo/dog-bed-covers-feet.jpg`,
	}, {
		src:  `${assetUrl}/vetondemand/photo/cat-hold-hands-sm.jpg`,
		zoom: `${assetUrl}/vetondemand/photo/cat-hold-hands.jpg`,
	}, {
		src:  `${assetUrl}/vetondemand/photo/older-woman-with-puppy-sm.jpg`,
		zoom: `${assetUrl}/vetondemand/photo/older-woman-with-puppy.jpg`,
	}];
	const defaultStyles = {
		overlay: {
			backgroundColor: '#111',
		}
	};
	const classes       = classNames(style.photos);
	return (
		<div className={classes}>
			<Flex justify="center" wrap my={4}>
				{photos.map((photo, idx) =>
					<Box key={idx} style={{padding: '2px'}} sm={11} md={6} lg={4}>
						<ImageZoom
							shouldPreload
							zoomMargin={0}
							defaultStyles={defaultStyles}
							image={{
								src:   photo.src,
								alt:   'Brand Photo',
								style: {width: '100%', height: '100%', display: 'block', objectFit: 'cover'}
							}}
							zoomImage={{
								src: photo.zoom,
								alt: 'Brand Photo',
							}}
						/>
					</Box>
				)}
			</Flex>
		</div>
	)
};

const Research = () => {
	const classes = classNames(style.research, 'typeset-project');
	return (
		<div className={classes}>
			<Flex justify="space-around" mb={6} mt={2} wrap>
				<Box p={2} sm={12} md={9} lg={7} mb={5}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/vetondemand/chart-2.png`,
							alt:   'Chart',
							style: {width: '100%', maxWidth: '400px'}
						}}
						zoomImage={{
							src: `${assetUrl}/vetondemand/chart-2.png`,
							alt: 'Chart',
						}}
					/>
					<h3>THERE ARE PLENTY OF VETS</h3>
					<p>The U.S. supply of veterinarians in 2012 was 90,200, and that supply exceeded the demand for veterinary services by about 11,250 full-time equivalent veterinarians.</p>
				</Box>
				<Box p={2} sm={12} md={9} lg={7}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/vetondemand/chart-1.png`,
							alt:   'Chart',
							style: {width: '100%', maxWidth: '400px'}
						}}
						zoomImage={{
							src: `${assetUrl}/vetondemand/chart-1.png`,
							alt: 'Chart',
						}}
					/>
					<h3>INCOMES ARE FALLING</h3>
					<p>Over the past decade, veterinarians have seen their wages fall. Increasing prices from pharmaceutical companies and the ever advancing march of technology have cut even deeper into practices nationwide.</p>
				</Box>
				<Box p={2} sm={12} md={9} lg={7} py={4}>
					<blockquote>72% of cats and 42% of dogs only see a vet either once or not at all annually</blockquote>
				</Box>
				<Box p={2} sm={12} md={11} lg={10}>
					<Flex justify="space-around" wrap>
						<Box p={2} sm={12} lg={6} style={{textAlign: 'left'}}>
							<h4>PRICES ARE RISING</h4>
							<p>Going to the vet has not been getting less expensive. Prices have risen steadily at or faster than inflation for two decades. Americans will spend over 60 billion this year on their pets, more than a third of that going to veterinary care.</p>
						</Box>
						<Box p={2} sm={12} lg={6} style={{textAlign: 'left'}}>
							<h4>PEOPLE ARE BUSY</h4>
							<p>Going into a brick and mortar vet clinic takes time. If you have to leave work, going home and back again with the animal adds even more stress to an already stressful situation. Being able to access key services via our devices is expected today.</p>
						</Box>
					</Flex>
				</Box>
			
			</Flex>
		</div>
	)
};

const Insight = () => {
	const classes = classNames(style.insight, 'typeset-project');
	return (
		<div className={classes}>
			<Flex justify="space-around" mb={6} mt={2} wrap>
				<Box p={2} sm={12} md={9} lg={7} mb={2}>
					<h3>PROBLEM</h3>
					<p className="large">Our pets are not getting the care they need despite there being more than enough vets who are trained and ready to&nbsp;provide&nbsp;their&nbsp;services.</p>
					<p className="large">The traditional model for veterinary care is not equiped to provide the intermediary care that is lacking in&nbsp;so&nbsp;many&nbsp;pet&nbsp;households.</p>
				</Box>
				<Box p={2} sm={12} md={9} lg={7}>
					<h3>SOLUTION</h3>
					<p className="large">Vet On Demand facilitates trusted, convenient, and affordable access to licensed veterinarians who provide the advice and recommendations to those who&nbsp;would&nbsp;otherwise&nbsp;forgo&nbsp;it.</p>
					<p className="large">By allowing on demand economics into a traditionally closed system, we increase the level and scope of care our pets receive while the size of the market grows&nbsp;to&nbsp;its&nbsp;full&nbsp;potential.</p>
				</Box>
			</Flex>
		</div>
	)
};

const Mobile = () => {
	const classes = classNames(style.mobile, 'typeset-project');
	const ios     = [{
		src:  `${assetUrl}/vetondemand/renders-v2/sm/receipt-gold-left.png`,
		zoom: `${assetUrl}/vetondemand/renders-v2/med/receipt-gold-left.png`,
	}, {
		src:  `${assetUrl}/vetondemand/renders-v2/sm/home-gold-left.png`,
		zoom: `${assetUrl}/vetondemand/renders-v2/med/home-gold-left.png`,
	}, {
		src:  `${assetUrl}/vetondemand/renders-v2/sm/signup-gold-right.png`,
		zoom: `${assetUrl}/vetondemand/renders-v2/med/signup-gold-right.png`,
	}, {
		src:  `${assetUrl}/vetondemand/renders-v2/sm/profile-vet-gold-right.png`,
		zoom: `${assetUrl}/vetondemand/renders-v2/med/profile-vet-gold-right.png`,
	}];
	const android = [{
		src:  `${assetUrl}/vetondemand/renders-android/sm/android-angle.png`,
		zoom: `${assetUrl}/vetondemand/renders-android/android-angle.png`,
	}, {
		src:  `${assetUrl}/vetondemand/renders-android/sm/android-front.png`,
		zoom: `${assetUrl}/vetondemand/renders-android/android-front.png`,
	}, {
		src:  `${assetUrl}/vetondemand/renders-android/sm/android-angle-right.png`,
		zoom: `${assetUrl}/vetondemand/renders-android/android-angle-right.png`,
	}];
	return (
		<div className={classes}>
			<Flex justify="center" mb={0} mt={2}>
				<Box p={2} sm={11} md={10} lg={9} mb={2}>
					<h3>iOS</h3>
					<Flex justify='space-around' wrap>
						{ios.map((phone, idx) =>
							<Box py={2} px={3} key={idx}>
								<ImageZoom
									shouldPreload
									image={{
										src:   phone.src,
										alt:   'Mobile App',
										style: {maxWidth: '130px'}
									}}
									zoomImage={{
										src: phone.zoom,
										alt: 'Mobile App',
									}}
								/>
							</Box>
						)}
					</Flex>
				</Box>
			</Flex>
			<Flex justify="center" mb={4} mt={2}>
				<Box p={2} sm={11} md={10} lg={9} mb={5}>
					<h3>Android</h3>
					<Flex justify='space-around' wrap>
						{android.map((phone, idx) =>
							<Box p={2} key={idx}>
								<ImageZoom
									shouldPreload
									image={{
										src:   phone.src,
										alt:   'Mobile App',
										style: {maxWidth: '180px'}
									}}
									zoomImage={{
										src: phone.zoom,
										alt: 'Mobile App',
									}}
								/>
							</Box>
						)}
					</Flex>
				</Box>
			</Flex>
		</div>
	)
};

const Web = () => {
	const classes = classNames(style.web, 'typeset-project');
	return (
		<div className={classes}>
			<Flex justify="center" mb={6} mt={4} wrap>
				<Box p={2} sm={12} lg={6} style={{textAlign: 'center'}}>
					<ImageZoom
						shouldPreload
						image={{
							src:   `${assetUrl}/vetondemand/web/dashboard-left.png`,
							alt:   'Web',
							style: {width: '100%', maxWidth: '600px'}
						}}
						zoomImage={{
							src: `${assetUrl}/vetondemand/web/dashboard-left@2x.png`,
							alt: 'Web',
						}}
					/>
				</Box>
				<Box p={2} sm={12} lg={6} style={{textAlign: 'center'}}>
					<ImageZoom
						shouldPreload
						image={{
							src:   `${assetUrl}/vetondemand/web/call-right.png`,
							alt:   'Web',
							style: {width: '100%', maxWidth: '600px'}
						}}
						zoomImage={{
							src: `${assetUrl}/vetondemand/web/call-right@2x.png`,
							alt: 'Web',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Video = () => {
	const classes = classNames(style.video, 'typeset-project');
	const opts    = {
		height:     '360',
		width:      '640',
		playerVars: {
			autoplay:       0,
			controls:       0,
			enablejsapi:    1,
			modestbranding: 1,
			playsinline:    1,
			showinfo:       0,
		}
	};
	return (
		<div className={classes}>
			<Flex justify="center" mb={6} mt={4} wrap>
				<Box style={{textAlign: 'center'}}>
					<div className={style.videoPlayer}>
						<YouTube
							videoId="T1MXErdWYVs"
							opts={opts}
						/>
					</div>
				</Box>
			</Flex>
		</div>
	)
};

const VetOnDemand = () => {
	const classes = classNames("vetondemand", style.root);
	return (
		<div className={classes}>
			<Project
				live
				title="Vet On Demand"
				url='http://vetondemand.com'
				roles={['strategy', 'branding', 'ui', 'ux', 'code']}
				description="Vet On Demand is the first mobile application to provide personalized, real time access to veterinary advice and recommendations through the power of live video conferencing."
				contribution="While running a small dev shop in Nashville, I was introduced to two brother who loved their dogs as much as each other. Inspired by a wave of healthcare applications sweeping the industry, we set out to build the first telemedicine platform for veterinary care. It was simple, video chat with a veterinarian. My team lead the product development process from start to finish. We validated the business case with extensive research, partnered with local veterinarians to help guide the roadmap, and built a cross platform telemedicine platform strong enough operate in a regulatory and legal landscape even tighter than what our two-legged doctors faced. Building and running Vet on Demand remains the most valuable experience of my life so far."
				bg={{src:`${assetUrl}/hero/vod-hero.jpg`,mobile:`${assetUrl}/hero/vod-hero-mobile.jpg`}}
				logo={{src: `${assetUrl}/vetondemand/logo-h-white.svg`, width: '300px'}}>
				
				
				<Heading title="Research"
				         subtitle="Becoming a Dog Whisperer"
				         icon={`${assetUrl}/lionhouse/data.svg`}
				/>
				
				<Research/>
				
				<Heading title="Insight"
				         subtitle="Every pet should have access to the care they deserve."
				         icon={`${assetUrl}/lionhouse/devise.svg`}
				/>
				
				<Insight/>
				
				<Heading title="Branding"
				         subtitle="Trusted. Convenient. Affordable."
				         icon={`${assetUrl}/lionhouse/design.svg`}
				/>
				
				<Logos/>
				<Palette/>
				<Type/>
				<Photos/>
				<Video/>
				
				<Heading title="Mobile"
				         subtitle="It's like having a vet in your pocket."
				         icon={`${assetUrl}/lionhouse/ui-alt.svg`}
				/>
				
				<Mobile/>
				
				<Heading title="Web"
				         subtitle="Instantly scalable, always available."
				         icon={`${assetUrl}/lionhouse/ux.svg`}
				/>
				
				<Web/>
			
			
			</Project>
		</div>
	);
};

export default VetOnDemand;
