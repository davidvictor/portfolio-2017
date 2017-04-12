import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import Project from '../../project';
import ImageZoom from 'react-medium-image-zoom';
import classNames from 'classnames';
import style from './style.scss';
import a from '../../../utils/analytics';
import isMobile from '../../../utils/isMobile';

import {assetUrl} from 'config';

const Website = () => {
	return (
		<div>
			<Flex justify="center" align="flex-end" wrap mt={0}>
				<Box p={2}>
					<ImageZoom
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/website.png`,
							alt:   'Website',
							style: {width: '100%', maxWidth: '800px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/website@2x.png`,
							alt: 'Website',
						}}
						onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'website.png'
						})}
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
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/portal-rb-data.png`,
							alt:   'Portal Data',
							style: {maxWidth: '260px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/portal-rb-data@2x.png`,
							alt: 'Portal Data',
						}}
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'portal-rb-data.png'
						})}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/portal-dashboard.png`,
							alt:   'Portal Dashboard',
							style: {maxWidth: '320px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/portal-dashboard@2x.png`,
							alt: 'Portal Dashboard',
						}}
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'portal-dashboard.png'
						})}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/portal-rb-toolsbox.png`,
							alt:   'Portal Toolbox',
							style: {maxWidth: '260px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/portal-rb-toolsbox@2x.png`,
							alt: 'Portal Toolbox',
						}}
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'portal-rb-toolsbox.png'
						})}
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
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/report-1.jpg`,
							alt:   'Report',
							style: {maxWidth: '200px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/report-1@2x.jpg`,
							alt: 'Report',
						}}
						onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'report-1.jpg'
						})}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/report-3.jpg`,
							alt:   'Report',
							style: {maxWidth: '200px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/report-3@2x.jpg`,
							alt: 'Report',
						}}
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'report-3.jpg'
						})}
					/>
				</Box>
				<Box p={2}>
					<ImageZoom
						//shouldPreload={!isMobile()}
						image={{
							src:   `${assetUrl}/esc/report-2.jpg`,
							alt:   'Report',
							style: {maxWidth: '336px'}
						}}
						zoomImage={{
							src: `${assetUrl}/esc/report-2@2x.jpg`,
							alt: 'Report',
						}}
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'report-2.jpg'
						})}
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
						onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'trade-display.png'
						})}
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
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'ers-logo-light.jpg'
						})}
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
					  onZoom={()=>a.track('Image Zoomed',{
							page: 'ESC',
							src: 'ers-logo-dark.jpg'
						})}
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
				roles={['design','ui','ux','code']}
				description="Environmental Science Corporation is the largest laboratory facility dedicated to environmental testing and certified to support your work nationwide, working for over two decades to become a prominent  force in the lab sciences industry, with locations in nearly every state. They are an employee owned corporation and have consistently led the industry in creating more environmentally sustainable methods to do the job, such as reducing the need for high sample volumes and creating technology to test for more data while creating less waste. ESC holds nation-wide certifications and has the highest capacity of any environmental lab for expedited and accurate results."
				contribution="ESC needed web technology to match the level of scientific service they provide to their clients. Laboratory analyses spawns absurd amounts of data, and laboratories are constantly faced with the problem of how best to display this data to their clients. The dashboards  ESC needed for their clients had to be able to mine, summarize, and highlight key points and findings from the data... all in the browser, before React, with performant IE9 as a business requirement. Kids these days will never know how easy they have it."
				bg={{src:`${assetUrl}/hero/esc-hero.jpg`,mobile:`${assetUrl}/hero/esc-hero-mobile.jpg`}}
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
