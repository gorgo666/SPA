/** @format */

export const mindate = (arrival) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day;
  arrival === 'arrival' ? (day = date.getDate()) : (day = date.getDate() + 1);

  if (month <= 9) {
    month = '0' + month;
  }
  if (day <= 9) {
    day = '0' + day;
  }

  date = year + '-' + month + '-' + day;

  return date;
};
