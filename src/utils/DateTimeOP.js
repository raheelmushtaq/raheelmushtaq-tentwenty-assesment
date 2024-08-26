import moment from 'moment'

export const getFormatedDate = (date, formte) => {
    var currentFormate = formte
    if (currentFormate == null || currentFormate == 'undefined' || currentFormate == '') {
        currentFormate = this.dateFormat2
    }
    return moment(date).format(currentFormate)

}

export const dateFormates = {
    dateFormat0: "MM/DD/YYYY",
    dateFormat1: "MMMM DD, YYYY",
    dateFormat2: "MMM DD, YYYY - hh:mm a",
}
