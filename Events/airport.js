"use strict";
(function () {
  console.log("Hi");
})();
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.getData = function () {
    return this.name + " " + this.surname;
  };
}
function Seat(number, category) {
  this.number = number || Math.floor(Math.random() * 90) + 10;
  this.category = category || "e";
  this.getData = function () {
    return this.number + ", " + this.category.toUpperCase();
  };
}
function Passenger(person, seat) {
  this.person = person;
  this.seat = seat;
  this.getData = function () {
    return this.seat.getData() + ", " + this.person.getData();
  };
}
function Flight(relation, date) {
  this.relation = relation;
  this.date = new Date(date);
  this.passengers = [];
  this.addPassenger = function (passenger) {
    this.passengers.push(passenger);
  };
}
function Airport() {
  this.name = "Nikola Tesla";
  this.flights = [];
  this.addFlight = function (flight) {
    this.flights.push(flight);
  };
}
function createFlight(relation, date) {
  return new Flight(relation, date);
}
function createPassenger(firstName, lastName, seatNumber, category) {
  var person = new Person(firstName, lastName);
  var seat = new Seat(seatNumber, category);
  return new Passenger(person, seat);
}
var airport = new Airport();

var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

var passenger1 = createPassenger("John", "Snow", 1, "b");
var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
var passenger4 = createPassenger("Tyrion", "Lannister");

flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight2.addPassenger(passenger3);
flight2.addPassenger(passenger4);

airport.addFlight(flight1);
airport.addFlight(flight2);

console.log(
  "Airport: " + airport.name + ", total passengers: " + airport.flights.length
);

Airport.prototype.getData = function () {
  var totalPassengers = 0;
  var output = "Airport: " + this.name + ", total passengers: ";
  for (var i = 0; i < this.flights.length; i++) {
    var flight = this.flights[i];
    output += flight.relation + ", " + flight.date + "\n";
    for (var j = 0; j < flight.passengers.length; j++) {
      var passenger = flight.passengers[j];
      output += passenger.getData() + "\n";
      totalPassengers++;
    }
  }
  output += totalPassengers;
  return output;
};

console.log(airport.getData());
