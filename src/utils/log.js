import emoji from 'node-emoji';
import {logs} from 'config/debug';

export default function log(group, data, img, type, props, state) {
	if (!group) return false;
	
	if (!logs) return false;
	
	let groupStyles;
	
	switch (type) {
		case ('initial'):
			groupStyles = [
				'color: white',
				'background: #5486FF',
			];
			break;
		case ('cwm'):
			groupStyles = [
				'color: white',
				'background: #34495E',
			];
			break;
		case ('cdm'):
			groupStyles = [
				'color: white',
				'background: #1E824C',
			];
			break;
		case ('cdu'):
			groupStyles = [
				'color: black',
				'background: #F27935',
			];
			break;
		case ('cwrp'):
			groupStyles = [
				'color: black',
				'background: #F9BF3B',
			];
			break;
		case ('cwum'):
			groupStyles = [
				'color: white',
				'background: #ED1844',
			];
			break;
		case ('render'):
			groupStyles = [
				'color: white',
				'background: #9A12B3',
			];
			break;
		case ('segment'):
			groupStyles = [
				'color: white',
				'background: #43AF79',
			];
			break;
		case ('success'):
			groupStyles = [
				'color: white',
				'background: #00BAA1',
			];
			if (!img) {
				img = ':tada:';
			}
			break;
		case ('error'):
			groupStyles = [
				'color: white',
				'background: #C2003C',
			];
			if (!img) {
				img = ':fire:';
			}
			break;
		case ('warning'):
			groupStyles = [
				'color: white',
				'background: #EFA343',
			];
			if (!img) {
				img = ':checkered_flag:';
			}
			break;
		case ('info'):
			groupStyles = [
				'color: white',
				'background: #00B0EB',
			];
			if (!img) {
				img = ':pushpin:';
			}
			break;
		default:
			groupStyles = [
				'color: black',
			];
	}
	
	const baseStyles = [
		'display: block',
		'font-size: 10px',
		'line-height: 14px',
		'font-weight: bold',
		'padding: 2px 6px',
		'border-radius: 2px',
	];
	
	let imgStyles = [
		'font-size: 14px',
		'line-height: 14px',
	];
	
	let propsStyles = [
		'color: #19B5FE',
	];
	
	let stateStyles = [
		'color: #CF000F',
	];
	
	let dataStyles = [
		'color: #22313F',
	];
	
	groupStyles = groupStyles.concat(baseStyles).join(';');
	propsStyles = propsStyles.concat(baseStyles).join(';');
	stateStyles = stateStyles.concat(baseStyles).join(';');
	dataStyles  = dataStyles.concat(baseStyles).join(';');
	imgStyles = img ? imgStyles.concat(['margin-right: 6px']).join(';') : imgStyles.join(';');
	
	console.groupCollapsed(`%c${img ? emoji.emojify(img) : ''}%c${group}`, imgStyles, groupStyles);
	if (props) {
		console.groupCollapsed(`%cProps`, propsStyles);
		console.log(JSON.parse(JSON.stringify(props)));
		console.groupEnd();
	}
	if (state) {
		console.groupCollapsed(`%cState`, stateStyles);
		console.log(JSON.parse(JSON.stringify(state)));
		console.groupEnd();
	}
	if (data !== '' && (props || state)) {
		console.groupCollapsed(`%cData`, dataStyles);
		console.log(JSON.parse(JSON.stringify(data)));
		console.groupEnd();
	} else if (!props && !state) {
		console.log(data);
	}
	console.groupEnd();
	
	return true
}
