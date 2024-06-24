function daysToBirthday(birthday) {
  let today = new Date();
  let birthDate = new Date(birthday);
  let timeDifference = Math.abs(birthDate.getTime() - today.getTime());
  let daysToBirthday = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysToBirthday;
}

console.log(daysToBirthday("february 25"));
