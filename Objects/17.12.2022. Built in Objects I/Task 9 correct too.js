// 9. Write a method that for a given departure and arrival time calculates the time the trip takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function calculateTripTime(departure, arrival) {
  let departureDate = new Date("12/26/2022" + departure);
  let arrivalDate = new Date("12/26/2022" + arrival);

  let diff = arrivalDate.getTime() - departureDate.getTime();

  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

console.log(calculateTripTime("8:22:13", "11:43:22"));
