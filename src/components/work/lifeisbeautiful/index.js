import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
import ImageZoom from 'react-medium-image-zoom'
import classNames from 'classnames';
import style from './style.scss';

class LifeisBeautiful extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes = classNames("lifeisbeautiful", style.root);
		return (
			<div className={classes}>
				
				<Hero
					bg="/images/lifeisbeautiful/lib-11-sm.jpg"
					logo="">
					<Deets title="Life is Beautiful"/>
				</Hero>
				
				<Flex justify="center" pt={4}>
					<Box col={5}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/lib-logo-lockup.png',
								alt:       'Logo',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
				</Flex>
				
				<Flex justify="center">
					<Box col={9}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/lib-web.png',
								alt:       'Website',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
				</Flex>
				
				<Flex justify="space-around" wrap={false}>
					<Box>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/app/lib-app-1_iphone5s_spacegrey_portrait.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/app/lib-app-2_iphone5s_spacegrey_portrait.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/app/lib-app-3_iphone5s_spacegrey_portrait.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/app/lib-app-4_iphone5s_spacegrey_portrait.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
				</Flex>
				
				<Flex justify="center" py={4}>
					<Box>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/lib-poster.jpg',
								alt:       'Lineup Poster',
								className: 'img',
								style:     {width: 'auto', height: '600px'}
							}}
							zoomImage={{
								src: '/images/lifeisbeautiful/lib-poster.jpg',
								alt: 'Lineup Poster'
							}}
						/>
					</Box>
					<Box flex px={2}>
						<Flex justify="space-between" align="center" flex flexColumn>
							<Box>
								<ImageZoom
									image={{
										src:       '/images/lifeisbeautiful/lib-map-back.jpg',
										alt:       '',
										className: 'img',
										style:     {width: 'auto', height: '290px'}
									}}
								/>
							</Box>
							<Box>
								<ImageZoom
									image={{
										src:       '/images/lifeisbeautiful/lib-map-front.jpg',
										alt:       '',
										className: 'img',
										style:     {width: 'auto', height: '290px'}
									}}
								/>
							</Box>
						</Flex>
					</Box>
				</Flex>
				
				<Flex justify="center" py={4} wrap={false}>
					<Box col={3} px={1}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/LifeisFuckin.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box col={3} px={1}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/GiveAShit.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box col={3} px={1}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/YouCantSpellBeautiful.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
				</Flex>
				
				<Flex justify="center" py={4} wrap={false}>
					<Box px={1}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/lib-bullnose.gif',
								alt:       '',
								className: 'img',
								style:     {width: 'auto', height: '500px'}
							}}
							zoomImage={{
								src: '/images/lifeisbeautiful/lib-bullnose.gif',
								alt: ''
							}}
						/>
					</Box>
					<Box px={1}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/LIB_Com_Ticket-ANIMATE.gif',
								alt:       '',
								className: 'img',
								style:     {width: 'auto', height: '500px'}
							}}
							zoomImage={{
								src: '/images/lifeisbeautiful/LIB_Com_Ticket-ANIMATE.gif',
								alt: ''
							}}
						/>
					</Box>
				</Flex>
				
				<Flex justify="space-around" wrap py={6}>
					<Box px={2}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/culinary_logos-01.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box px={2}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/culinary_logos-07.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box px={2}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/culinary_logos-05.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box px={2}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/culinary_logos-02.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box px={2}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/culinary_logos-03.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
					<Box px={2}>
						<ImageZoom
							image={{
								src:       '/images/lifeisbeautiful/culinary_logos-04.png',
								alt:       '',
								className: 'img',
								style:     {width: 'auto'}
							}}
						/>
					</Box>
				</Flex>
				
				
			
			</div>
		);
	}
}

export default  LifeisBeautiful;
