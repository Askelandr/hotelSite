export default function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  month = month + 1;
  let day = date.getDate();
  if (month === 10 || month === 11 || month === 12) {
    date = year + "-" + month + "-" + day;
  } else {
    date = year + "-" + "0" + month + "-" + day;
  }

  console.log(date);
  return date;
}
