import moment from 'moment';

const hmsToSec = (time) => {
	let hms = time;
	if (hms.split(":").length === 2) {
		hms = "00:"+hms
	}
	return moment.duration(hms).asSeconds();
};

export default hmsToSec;