function daysToNextBirthday(day, month) {
  let today = new Date();
  let nextBirthday = new Date(today.getFullYear(), month - 1, day);

  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  let timeDifference = nextBirthday.getTime() - today.getTime();
  let daysDifference = timeDifference / (1000 * 3600 * 24);
  return Math.ceil(daysDifference);
}

console.log(daysToNextBirthday(25, 02));
