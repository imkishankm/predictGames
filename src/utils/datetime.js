import moment from "moment"

export const getFormatedDate=(date,formate='DD/MM/YYYY')=>{
    let fdate=date
    if (!fdate) {
        return fdate
    }

    return moment(date).format(formate)

}


export const getFormatedDateTime=(date,formate='DD/MM/YYYY hh:mm A')=>{
    let fdate=date
    if (!fdate) {
        return fdate
    }

    return moment(date).format(formate)

}