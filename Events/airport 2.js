"use strict";
(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  Person.prototype.getData = function () {
    return this.name + " " + this.surname;
  };

  function Seat(number, category) {
    this.number = number || Math.floor(Math.random() * (100 - 10) + 10);
    this.category = category || "e";
  }
  Seat.prototype.getData = function () {
    return this.number + ", " + this.category.toUpperCase();
  };

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
  }
  Passenger.prototype.getData = function () {
    return (
      this.number +
      ", " +
      this.seat.category.toUpperCase() +
      ", " +
      this.person.getData()
    );
  };

  //   Passenger.prototype.getData = function () {
  //     return (
  //       this.seat.number +
  //       ", " +
  //       this.seat.category.toUpperCase() +
  //       ", " +
  //       this.person.getData()
  //     );
  //   };

  //   Passenger.prototype.getData = function () {
  //     return this.seat.getData() + ", " + this.person.getData();
  //   };

  //   function Flight(relation, date) {
  //     this.relation = relation;
  //     this.date = new Date(date);
  //     this.passengers = [];
  //   }
  //   Flight.prototype.addPassenger = function (passenger) {
  //     this.passengers.push(passenger);
  //   };
  //   Flight.prototype.getData = function () {
  //     var date =
  //       this.date.getDate() +
  //       "." +
  //       (this.date.getMonth() + 1) +
  //       "." +
  //       this.date.getFullYear();
  //     var passengersData = "";
  //     for (var i = 0; i < this.passengers.length; i++) {
  //       passengersData +=
  //         "\n\t\t" + (i + 1) + ", " + this.passengers[i].getData();
  //     }
  //     return date + ", " + this.relation + passengersData;
  //   };
  //   function Flight(relation, date) {
  //     this.relation = relation;
  //     this.date = new Date(date);
  //     this.passengers = [];
  //   }
  //   Flight.prototype.addPassenger = function (passenger) {
  //     this.passengers.push(passenger);
  //   };
  //   function Flight(relation, date) {
  //     this.relation = relation;
  //     this.date = new Date(date);
  //     this.passengers = [];
  //     this.passengerNumber = 1;
  //   }
  //   Flight.prototype.addPassenger = function (passenger) {
  //     passenger.number = this.passengerNumber;
  //     this.passengerNumber++;
  //     this.passengers.push(passenger);
  //   };
  let passengerNumber = 1;
  function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.passengers = [];
  }
  //   Flight.prototype.addPassenger = function (passenger) {
  //     passenger.number = passengerNumber;
  //     passengerNumber++;
  //     this.passengers.push(passenger);
  //   };
  Flight.prototype.addPassenger = function (passenger) {
    passenger.number = this.passengerNumber;
    this.passengerNumber++;
    this.passengers.push(passenger);
  };

  Flight.prototype.getData = function () {
    var date =
      this.date.getDate() +
      "." +
      (this.date.getMonth() + 1) +
      "." +
      this.date.getFullYear();
    var passengersData = "";
    for (var i = 0; i < this.passengers.length; i++) {
      passengersData += "\n\t\t" + this.passengers[i].getData();
    }
    return date + ", " + this.relation + passengersData;
  };
  function Airport() {
    this.name = "Nikola Tesla";
    this.flights = [];
    this.passengerNumber = 1;
  }
  Airport.prototype.addFlight = function (flight) {
    flight.passengerNumber = this.passengerNumber;
    this.flights.push(flight);
  };

  //   function Airport() {
  //     this.name = "Nikola Tesla";
  //     this.flights = [];
  //   }
  //   Airport.prototype.addFlight = function (flight) {
  //     this.flights.push(flight);
  //   };
  Airport.prototype.getData = function () {
    var flightsData = "";
    var totalPassengers = 0;
    for (var i = 0; i < this.flights.length; i++) {
      flightsData += "\n\t" + this.flights[i].getData();
      totalPassengers += this.flights[i].passengers.length;
    }
    return (
      "Airport: " +
      this.name +
      ", total passengers: " +
      totalPassengers +
      flightsData
    );
  };

  var createFlight = function (relation, date) {
    return new Flight(relation, date);
  };

  var createPassenger = function (firstName, lastName, seatNumber, category) {
    var person = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
  };

  var airport = new Airport();
  var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
  var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
  airport.addFlight(flight1);
  airport.addFlight(flight2);

  var passenger1 = createPassenger("John", "Snow", 1, "b");
  var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
  var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
  var passenger4 = createPassenger("Tyrion", "Lannister");
  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  console.log(airport.getData());
})();
