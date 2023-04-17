
import moment from 'moment';

const DateUtil = {
    getDateFormat(timestamp){
        return moment(timestamp).format("MM/DD/YYYY hh:MM")
    }
}

export default DateUtil;
