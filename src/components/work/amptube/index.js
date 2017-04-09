import React, {Component} from 'react';
import Project from '../../project';
import Heading from '../../project/heading';
import {Flex, Box} from 'reflexbox';
import YouTube from 'react-youtube';
import ImageZoom from 'react-medium-image-zoom';
import classNames from 'classnames';
import style from './style.scss';
import a from '../../../utils/analytics';

import {assetUrl} from 'config';

const Amplify = () => {
	return (
		<div>
			<Flex justify="center" mt={6}>
				<Box px={1}>
					<ImageZoom
						shouldRespectMaxDimension
						image={{
							src:   `${assetUrl}/amptube/amplify-panel.gif`,
							alt:   'Amplify Animation',
							style: {maxWidth: '361px', width: '100%'}
						}}
						onZoom={()=>a.track('Image Zoomed',{
							page: 'Amptube',
							src: `amplify-panel.gif`
						})}
					/>
				</Box>
			</Flex>
			<Flex justify="center" mt={2} mb={6}>
				<Box px={1}>
					<ImageZoom
						shouldRespectMaxDimension
						image={{
							src:   `${assetUrl}/amptube/leaderboard.png`,
							alt:   'Amplify Leaderboard',
							style: {maxWidth: '348px', width: '100%'}
						}}
						onZoom={()=>a.track('Image Zoomed',{
							page: 'Amptube',
							src: `leaderboard.png`
						})}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const UI = () => {
	return (
		<div>
			<Flex justify="center" mt={0} mb={5}>
				<Box px={1}>
					<ImageZoom
						shouldPreload
						image={{
							src:   `${assetUrl}/amptube/video-page.png`,
							alt:   'Video Page',
							style: {maxWidth: '800px', width: '100%'}
						}}
						zoomImage={{
							src: `${assetUrl}/amptube/video-page@2x.png`,
							alt: 'Video Page',
						}}
						onZoom={()=>a.track('Image Zoomed',{
							page: 'Amptube',
							src: `video-page.png`
						})}
					/>
				</Box>
			</Flex>
		</div>
	)
};

const Logos = () => {
	const classes = classNames(style.logos);
	return (
		<div className={classes}>
			<Flex justify="space-around" align="center" my={5} wrap>
				<Box p={2}>
					<img className={style.logoH} src={`${assetUrl}/amptube/lockup-horizontal.svg`} alt="Logo"/>
				</Box>
				<Box p={2}>
					<img className={style.logoV} src={`${assetUrl}/amptube/lockup-vertical.svg`} alt="Logo"/>
				</Box>
			</Flex>
		</div>
	)
};

const Palette = () => {
	const colors = [
		{
			name: 'blue'
		}, {
			name: 'light-blue'
		}, {
			name: 'red'
		}, {
			name: 'gray'
		}
	];
	return (
		<div>
			<Flex justify="center" my={6}>
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
							videoId="M95S5HZ3gq4"
							opts={opts}
						/>
					</div>
				</Box>
			</Flex>
		</div>
	)
};

const Amptube = () => {
	const classes = classNames("amptube", style.root);
	return (
		<div className={classes}>
			<Project
				live
				title="Amptube"
				url="https://amptu.be"
				roles={['strategy', 'branding', 'ui', 'ux', 'code']}
				description="Amptube is a discovery tool that allows up and coming creators the opportunity to earn featured placement on an established creator’s page by sharing videos with their social networks."
				contribution="Building Amptube made me the engineer I am today. It was during this effort that my skills behind the keyboard became equal to those behind the mouse. As a cofounder, I was instrumental in everything from business strategy to product development to the fundraising effort. The path from a designer to an engineer is long and fraught with seemingly insurmountable obstacles. Overcoming them seems impossible until it isn't. This experience has made me not only a better designer, but a better person. Combining design thinking with an engineers skepticism is as solid of a problem solving paradigm as I've ever seen. Blast off."
				bg={{src: `${assetUrl}/hero/at-hero.jpg`, mobile: `${assetUrl}/hero/at-hero-mobile.jpg`}}
				logo={{src: `${assetUrl}/amptube/lockup-horizontal-white.svg`, width: '260px'}}>
				
				<Heading title="Insight"
				         subtitle=""
				         icon={`${assetUrl}/lionhouse/devise.svg`}
				/>
				
				<Video/>
				
				<Heading title="Branding"
				         subtitle=""
				         icon={`${assetUrl}/lionhouse/design.svg`}
				/>
				
				<Logos/>
				<Palette/>
				
				<Heading title="Web"
				         subtitle=""
				         icon={`${assetUrl}/lionhouse/ux.svg`}
				/>
				
				<Amplify/>
				
				<UI/>
				
			</Project>
		</div>
	);
};

export default Amptube;
