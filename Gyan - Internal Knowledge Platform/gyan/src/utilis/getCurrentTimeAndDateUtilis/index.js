 function DisplayCurrentTimeInHours() {
        const date = new Date();
        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const am_pm = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const timeInHours = hours + ":" + minutes + "" + " " + am_pm;
        return timeInHours
};


export const GetCurrentDateAndTimeUtil = () => {

    const currentDateAndTimeObject = new Date()

    const getDate = currentDateAndTimeObject.getDate()
    const getMonth = currentDateAndTimeObject.getMonth() + 1
    const getFullYear = currentDateAndTimeObject.getFullYear()
    const hours = DisplayCurrentTimeInHours()

    return `${getDate}/${getMonth}/${getFullYear} at ${hours}`


}