import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import Project from '../../project';
import ImageZoom from 'react-medium-image-zoom';
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const Brand = () => {
	return (
		<div>
			<Flex justify="center" my={6}>
				<Box sm={10} md={8} lg={6} px={3}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/logo-lockup.png`,
							alt:   'Logo',
							style: {maxWidth: '800px', width: '100%'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/logo-lockup@2x.png`,
							alt: 'Logo',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Web = () => {
	return (
		<div>
			<Flex justify="center">
				<Box px={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/website.png`,
							alt:   'Website',
							style: {width: '100%', maxWidth: '800px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/website@2x.png`,
							alt: 'Website',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const App = () => {
	return (
		<div>
			<Flex justify="center" wrap>
				<Box py={2} px={4}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/app/app-1.png`,
							alt:   'Festival App',
							style: {width: '130px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/app/app-1@2x.png`,
							alt: 'Festival App',
						}}
					/>
				</Box>
				<Box py={2} px={4}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/app/app-2.png`,
							alt:   'Festival App',
							style: {width: '130px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/app/app-2@2x.png`,
							alt: 'Festival App',
						}}
					/>
				</Box>
				<Box py={2} px={4}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/app/app-3.png`,
							alt:   'Festival App',
							style: {width: '130px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/app/app-3@2x.png`,
							alt: 'Festival App',
						}}
					/>
				</Box>
				<Box py={2} px={4}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/app/app-4.png`,
							alt:   'Festival App',
							style: {width: '130px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/app/app-4@2x.png`,
							alt: 'Festival App',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Poster = () => {
	return (
		<div>
			<Flex justify="center" mt={5} mb={3} wrap>
				<Box px={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/poster.jpg`,
							alt:   'Lineup Poster',
							style: {maxWidth: '420px', width: '100%'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/poster@2x.jpg`,
							alt: 'Lineup Poster'
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Guide = () => {
	return (
		<div>
			<Flex justify="center" py={4} px={2} wrap>
				<Box mt={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/map.jpg`,
							alt:   'Guide Inside Cover',
							style: {width: 'auto', maxHeight: '400px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/map@2x.jpg`,
							alt: 'Guide Inside Cover',
						}}
					/>
				</Box>
				<Box flex px={2}>
					<Flex justify="space-between" align="center" flex flexColumn>
						<Box my={2}>
							<ImageZoom
								image={{
									src:   `${assetUrl}/lifeisbeautiful/schedule.jpg`,
									alt:   'Schedule',
									style: {width: '328px'}
								}}
								zoomImage={{
									src: `${assetUrl}/lifeisbeautiful/schedule@2x.jpg`,
									alt: 'Schedule',
								}}
							/>
						</Box>
						<Box>
							<ImageZoom
								image={{
									src:   `${assetUrl}/lifeisbeautiful/guide-inside.png`,
									alt:   'Guide Inside Cover',
									style: {width: 'auto', maxHeight: '253px'}
								}}
								zoomImage={{
									src: `${assetUrl}/lifeisbeautiful/guide-inside@2x.png`,
									alt: 'Guide Inside Cover',
								}}
							/>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</div>
	)
};

const VIP = () => {
	return (
		<div>
			<Flex justify="center" py={4} wrap>
				<Box sm={12} md={3} lg={3} px={2} style={{textAlign: 'center'}}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/vip1.png`,
							alt:   'VIP Artwork',
							style: {width: '100%', maxWidth: '280px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/vip1@2x.png`,
							alt: 'VIP Artwork',
						}}
					/>
				</Box>
				<Box sm={12} md={3} lg={3} px={2} style={{textAlign: 'center'}}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/vip2.png`,
							alt:   'VIP Artwork',
							style: {width: '100%', maxWidth: '280px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/vip2@2x.png`,
							alt: 'VIP Artwork',
						}}
					/>
				</Box>
				<Box sm={12} md={3} lg={3} px={2} style={{textAlign: 'center'}}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/vip3.png`,
							alt:   'VIP Artwork',
							style: {width: '100%', maxWidth: '280px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/vip3@2x.png`,
							alt: 'VIP Artwork',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Animation = () => {
	return (
		<div style={{maxWidth: '420px', width: '100%', margin: '0 auto'}}>
			<Flex justify="center" py={3} wrap={false}>
				<Box px={2}>
					<video className={style.bullnose} autoPlay loop muted playsInline poster={`${assetUrl}/lifeisbeautiful/video/bullnose.jpg`}>
						<source src={`${assetUrl}/lifeisbeautiful/video/bullnose.mp4`} type="video/mp4"/>
					</video>
				</Box>
			</Flex>
		</div>
	)
};

const Tickets = () => {
	return (
		<div style={{maxWidth: '728px', margin: '0 auto'}}>
			<Flex justify="space-around" py={4} px={2} wrap>
				<Box col={12} mb={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/ad-728x90_music.gif`,
							alt:   'Banner Ad',
							style: {width: 'auto', display: 'block', margin: '0 auto'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/ad-728x90_music.gif`,
							alt: 'Banner Ad',
						}}
					/>
				</Box>
				<Box pr={1} mb={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/ticket-animate.gif`,
							alt:   'Commemorative Ticket',
							style: {width: 'auto', height: '420px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/ticket-animate@2x.gif`,
							alt: 'Commemorative Ticket',
						}}
					/>
				</Box>
				<Box>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/wristbands.png`,
							alt:   'Wristbands',
							style: {width: 'auto', maxHeight: '420px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/wristbands@2x.png`,
							alt: 'Wristbands',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Culinary = () => {
	return (
		<div>
			<Flex justify="center" wrap pt={2} pb={2}>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/culinary/1.jpg`,
							alt:   'Culinary Logo',
							style: {width: 'auto', maxWidth: '240px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/culinary/1@3x.jpg`,
							alt: 'Culinary Logo',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/culinary/2.jpg`,
							alt:   'Culinary Logo',
							style: {width: 'auto', maxWidth: '240px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/culinary/2@3x.jpg`,
							alt: 'Culinary Logo',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/culinary/3.jpg`,
							alt:   'Culinary Logo',
							style: {width: 'auto', maxWidth: '240px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/culinary/3@3x.jpg`,
							alt: 'Culinary Logo',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/culinary/4.jpg`,
							alt:   'Culinary Logo',
							style: {width: 'auto', maxWidth: '240px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/culinary/4@3x.jpg`,
							alt: 'Culinary Logo',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/culinary/5.jpg`,
							alt:   'Culinary Logo',
							style: {width: 'auto', maxWidth: '240px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/culinary/5@3x.jpg`,
							alt: 'Culinary Logo',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/culinary/6.jpg`,
							alt:   'Culinary Logo',
							style: {width: 'auto', maxWidth: '240px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/culinary/6@3x.jpg`,
							alt: 'Culinary Logo',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Love = () => {
	return (
		<div>
			<Flex justify="center" pt={0}>
				<Box sm={10} md={9} lg={6} style={{textAlign: 'center'}}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/lifeisbeautiful/equal-love.png`,
							alt:   'Equal Love Promo Logo',
							style: {width: '100%', maxWidth: '420px'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/equal-love@2x.png`,
							alt: 'Equal Love Promo Logo',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Photos = () => {
	const photos        = [{
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-1.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-1@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-2.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-2@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-3.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-3@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-4.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-4@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-5.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-5@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-6.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-6@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-7.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-7@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-8.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-8@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-9.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-9@2x.jpg`,
		width: '240px',
	}, {
		src:   `${assetUrl}/lifeisbeautiful/photos/lib-10.jpg`,
		zoom:  `${assetUrl}/lifeisbeautiful/photos/lib-10@2x.jpg`,
		width: '240px',
	}];
	const defaultStyles = {
		overlay: {
			backgroundColor: '#111',
		}
	};
	return (
		<div>
			<Flex justify="center" wrap pt={2} pb={2}>
				{photos.map((photo, idx) =>
					<Box key={idx} p={1}>
						<ImageZoom
							shouldPreload
							zoomMargin={0}
							defaultStyles={defaultStyles}
							image={{
								src:   photo.src,
								alt:   'Festival Photo',
								style: {width: 'auto', maxWidth: photo.width, maxHeight: '160px', display: 'block'}
							}}
							zoomImage={{
								src: photo.zoom,
								alt: 'Festival Photo',
							}}
						/>
					</Box>
				)}
			</Flex>
		</div>
	)
};

const PlanetHollywood = () => {
	const defaultStyles = {
		overlay: {
			backgroundColor: '#111',
		}
	};
	return (
		<div>
			<Flex justify="center" mt={6} mb={3}>
				<Box col={12}>
					<ImageZoom
						shouldPreload
						zoomMargin={0}
						defaultStyles={defaultStyles}
						image={{
							src:   `${assetUrl}/lifeisbeautiful/planet-hollywood-crop.jpg`,
							alt:   'Vegas Strip Takeover',
							style: {width: 'auto'}
						}}
						zoomImage={{
							src: `${assetUrl}/lifeisbeautiful/planet-hollywood-crop@2x.jpg`,
							alt: 'Vegas Strip Takeover',
						}}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const LifeisBeautiful = () => {
	
	const classes = classNames("lifeisbeautiful", style.root);
	return (
		<div className={classes}>
			
			<Project
				title="Life is Beautiful"
				url='https://lifeisbeautiful.com'
				roles={['creative','branding','design','ui','code']}
				description="Life is Beautiful is an inspirational company dedicated to helping people conquer their fears and chase their dreams. Its signature project, the Life is Beautiful Festival, was founded in 2013 and launched in October of that same year as a highly successful lifestyle event featuring marquee musicians, chefs, artists and speakers. Held in the heart of Downtown Las Vegas, Life is Beautiful Festival attracted more than 60,000 patrons in its first year, and is now branching out to an international online forum inspiring social change."
				contribution="I was selected to become a memeber of the founding team after an extensive pitch process in 2012. I worked closely with the founder, Rehan Chaudry, to turn his vision into reality. Drawing much inspiration from the host city, downtown Las Vegas, a gritty, raw, artistic logo, juxtaposed with shapes inspired by old town Vegas architecture emerged. Add some marquee lights and vibrant colors and you've got yourself a festival. I lead a creative team to implement every visual element for the event. From a custom CMS to manage website and app content to bathroom and exit signs, I oversaw it all."
				bg={{src:`${assetUrl}/hero/lib-hero.jpg`,mobile:`${assetUrl}/hero/lib-hero-mobile.jpg`}}
				logo={{src: `${assetUrl}/lifeisbeautiful/logo-heart-white.png`, width: "180px"}}>
				
				<Brand/>
				<Poster/>
				<Web/>
				<App/>
				<PlanetHollywood/>
				<Animation/>
				<Tickets/>
				<Guide/>
				<VIP/>
				<Culinary/>
				<Photos/>
				<Love/>
			</Project>
		</div>
	);
	
};

export default  LifeisBeautiful;
