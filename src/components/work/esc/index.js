import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import Project from '../../project';
import ImageZoom from 'react-medium-image-zoom';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const Website = () => {
	return (
		<div>
			<Flex justify="center" align="flex-end" wrap mt={0}>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/website.png`,
							alt:   'Website',
							style: {width: '100%', maxWidth: '800px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/website@2x.png`,
							alt: 'Website',
						}}
					/>
				</Box>
			</Flex>
		</div>
	);
};

const Portal = () => {
	return (
		<div>
			<Flex justify="center" align="flex-end" wrap mt={5}>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/portal-rb-data.png`,
							alt:   'Portal Data',
							style: {maxWidth: '260px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/portal-rb-data@2x.png`,
							alt: 'Portal Data',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/portal-dashboard.png`,
							alt:   'Portal Dashboard',
							style: {maxWidth: '320px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/portal-dashboard@2x.png`,
							alt: 'Portal Dashboard',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/portal-rb-toolsbox.png`,
							alt:   'Portal Toolbox',
							style: {maxWidth: '260px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/portal-rb-toolsbox@2x.png`,
							alt: 'Portal Toolbox',
						}}
					/>
				</Box>
			</Flex>
		</div>
	);
};

const Report = () => {
	return (
		<div>
			<Flex justify="center" align="flex-end" wrap my={5}>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/report-1.jpg`,
							alt:   'Report',
							style: {maxWidth: '200px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/report-1@2x.jpg`,
							alt: 'Report',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/report-3.jpg`,
							alt:   'Report',
							style: {maxWidth: '200px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/report-3@2x.jpg`,
							alt: 'Report',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/report-2.jpg`,
							alt:   'Report',
							style: {maxWidth: '336px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/report-2@2x.jpg`,
							alt: 'Report',
						}}
					/>
				</Box>
			</Flex>
		</div>
	);
};

const Display = () => {
	return (
		<div>
			<Flex justify="center" align="flex-end" wrap my={3}>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/trade-display.png`,
							alt:   'Trade Display',
							style: {width: '100%', maxWidth: '500px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/trade-display@2x.png`,
							alt: 'Trade Display',
						}}
					/>
				</Box>
			</Flex>
		</div>
	);
};

const ERS = () => {
	return (
		<div>
			<Flex justify="center" align="flex-end" wrap mt={3}>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/ers-logo-light.jpg`,
							alt:   'ERS Logo',
							style: {width: '100%', maxWidth: '360px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/ers-logo-light@2x.jpg`,
							alt: 'ERS Logo',
						}}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						image={{
							src:   `${assetUrl}/esc/ers-logo-dark.jpg`,
							alt:   'ERS Logo',
							style: {width: '100%', maxWidth: '360px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/ers-logo-dark@2x.jpg`,
							alt: 'ERS Logo',
						}}
					/>
				</Box>
			</Flex>
		</div>
	);
};

const ESC = () => {
	const classes = classNames("esc", style.root);
	return (
		<div className={classes}>
			<Project
				live
				title="ESC Lab Sciences"
				url="//esclabsciences.com"
				description="ESC Lab Sciences is the largest laboratory facility dedicated to environmental testing and certified to support your work nationwide. One laboratory, one phone call, one point of contact. ESC holds nation-wide certifications and has the highest capacity of any environmental lab for expedited and accurate results."
				contribution="Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy."
				bg={`${assetUrl}/esc/hero.jpg`}
				logo={{src: `${assetUrl}/esc/logo-color.svg`, width: "240px"}}>
				
				<Portal/>
				<Website/>
				<Report/>
				<ERS/>
				<Display/>
			</Project>
		</div>
	);
};

export default ESC;
