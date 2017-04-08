import log from './log';
import {analytics} from 'config';

export default {
	track(event, properties) {
		if(analytics && event) {
			mixpanel.track(event, properties);
		}
		log('TRACK', {event,properties}, ':chart_with_upwards_trend:', 'segment');
	},
}

