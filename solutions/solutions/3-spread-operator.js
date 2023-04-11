// BEGIN
export default function convertDatesToStrings(...dates) {
    if (dates.length === 0) {
    return [];
    }  
    return dates.map(date => {

    let [year, month, day] = date;

    let DATA = new Date(year, month, day);



    return DATA.toDateString();
      });
    }
// END