/** @format */

export const maxdate = () => {
  let date = new Date();
  let year = date.getFullYear() + 1;
  let month = date.getMonth() + 1;
  let day = date.getDay() + 1;

  if (month <= 9) {
    month = '0' + month;
  }
  if (day <= 9) {
    day = '0' + day;
  }

  date = year + '-' + month + '-' + day;

  return date;
};
