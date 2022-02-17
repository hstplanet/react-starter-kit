import { date } from 'quasar'

class HSTDate {

    dateBefore(dates) {
        let value = date.getDateDiff(new Date(), new Date(dates), "days")
        if (value === 0) {
            let value = date.getDateDiff(new Date(), new Date(dates), "hours")
            if (value !== 0) {
                return value + " saat önce"
            } else {
                let value = date.getDateDiff(new Date(), new Date(dates), "minutes")
                if (value === 0) {
                    let value = date.getDateDiff(new Date(), new Date(dates), "seconds")
                    return "biraz önce"
                }
                return value + " dakika önce"
            }
        } else if (value < 30) {
            return value + " gün önce"
        } else {
            let value = date.getDateDiff(new Date(), new Date(dates), "months")
            return value + " ay önce"
        }
    }


    addToDate(dates, options) {
        return date.addToDate(dates, options);
    }

    getNow(){
        return date.formatDate(new Date() , "X")
    }


}

export default new HSTDate();