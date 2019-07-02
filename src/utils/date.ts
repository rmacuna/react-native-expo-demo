export const formatToReadableDate = (stringDate) => {
// El objeto recibido se espera que sea de tipo [Day Month XX YEAR HOURS:MINUTS:SECONDS GMT-0500 (-05)]
    let humanDate = stringDate.toString().split(' ').slice(0, 4).join(' ');
    return humanDate;    
}

export const formatToReadableTime = (stringTime) => {
    let timeDate = stringTime.toString().split(' ').slice(3, 1)
    return timeDate
}

