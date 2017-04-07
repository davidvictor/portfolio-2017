import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import ImageZoom from 'react-medium-image-zoom';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const LogoGrid = () => {
	const photos        = [
		{
			src:  `${assetUrl}/archive/cherub.jpg`,
			zoom: `${assetUrl}/archive/cherub@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/huntridge-1.jpg`,
			zoom: `${assetUrl}/archive/huntridge-1@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/medicine-man.jpg`,
			zoom: `${assetUrl}/archive/medicine-man@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/feast.jpg`,
			zoom: `${assetUrl}/archive/feast@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/gro.jpg`,
			zoom: `${assetUrl}/archive/gro@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/nrc.jpg`,
			zoom: `${assetUrl}/archive/nrc@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/huntridge2.jpg`,
			zoom: `${assetUrl}/archive/huntridge2@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/huntridge1.jpg`,
			zoom: `${assetUrl}/archive/huntridge1@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/funky-umbrella3.jpg`,
			zoom: `${assetUrl}/archive/funky-umbrella3@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/funky-umbrella2.jpg`,
			zoom: `${assetUrl}/archive/funky-umbrella2@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/funky-umbrella1.jpg`,
			zoom: `${assetUrl}/archive/funky-umbrella1@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/fishdicks.jpg`,
			zoom: `${assetUrl}/archive/fishdicks@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/council.jpg`,
			zoom: `${assetUrl}/archive/council@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/headjamz.jpg`,
			zoom: `${assetUrl}/archive/headjamz@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/skydogcon3.jpg`,
			zoom: `${assetUrl}/archive/skydogcon3@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/swag-city1.jpg`,
			zoom: `${assetUrl}/archive/swag-city1@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/swag-city2.jpg`,
			zoom: `${assetUrl}/archive/swag-city2@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/flexawn.jpg`,
			zoom: `${assetUrl}/archive/flexawn@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/classic-1.jpg`,
			zoom: `${assetUrl}/archive/classic-1@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/classic-2.jpg`,
			zoom: `${assetUrl}/archive/classic-2@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/mcrs.jpg`,
			zoom: `${assetUrl}/archive/mcrs@2x.jpg`,
		}, {
			src:  `${assetUrl}/archive/moodsmith.jpg`,
			zoom: `${assetUrl}/archive/moodsmith@2x.jpg`,
		}
	];
	const defaultStyles = {
		overlay: {
			backgroundColor: '#111',
		}
	};
	return (
		<Flex justify="center" wrap pt={0}>
			{photos.map((photo, idx) =>
				<Box key={idx} my={0} sm={12} md={12} lg={12}>
					<ImageZoom
						shouldPreload
						zoomMargin={0}
						defaultStyles={defaultStyles}
						image={{
							src:   photo.src,
							alt:   'Archive',
							style: {width: '100%', display: 'block', margin: '0 auto'}
						}}
						zoomImage={{
							src: photo.zoom,
							alt: 'Archive',
						}}
					/>
				</Box>
			)}
		</Flex>
	)
};

const Archive = () => {
	const classes = classNames("archive", style.root);
	return (
		<div className={classes}>
			<LogoGrid/>
		</div>
	);
};

export default Archive;
