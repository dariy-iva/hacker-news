function convertTime(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

export function convertDate(unixTime) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = new Date(unixTime * 1000);
  const day = data.getDate();
  const month = months[data.getMonth()];
  const year = data.getFullYear();
  const hours = convertTime(data.getHours());
  const minutes = convertTime(data.getMinutes());
  const seconds = convertTime(data.getSeconds());
  return (
    day + " " + month + " " + year + " " + hours + ":" + minutes + ":" + seconds
  );
}
