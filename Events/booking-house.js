"use strict";
(function () {
  const Continent = {
    EU: "EU",
    AS: "AS",
    AF: "AF",
    SA: "SA",
    NA: "NA",
    AU: "AU",
  };

  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }

  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
  }

  Person.prototype.getPersonData = function () {
    let date = this.dateOfBirth.toISOString().slice(0, 10);
    let dateArr = date.split("-");
    date = dateArr[2] + "." + dateArr[1] + "." + dateArr[0].slice(-2);
    return this.name + " " + this.surname + ", " + date;
  };

  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
  }

  Player.prototype.getPlayerData = function () {
    let winAmount = this.country.odds * this.betAmount;
    return (
      this.country.name +
      ", " +
      winAmount +
      " eur, " +
      this.person.getPersonData()
    );
  };

  function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
  }

  Address.prototype.getAddressData = function () {
    return (
      this.number +
      " " +
      this.street +
      ", " +
      this.postalCode +
      " " +
      this.city +
      ", " +
      this.country
    );
  };

  function BettingPlace(address) {
    this.address = address;
    this.players = [];
  }

  BettingPlace.prototype.getBettingPlaceData = function () {
    let sum = this.players.reduce((acc, cur) => acc + cur.betAmount, 0);
    return (
      this.address.street +
      ", " +
      this.address.postalCode +
      " " +
      this.address.city +
      ", sum of all bets: " +
      sum +
      "eur"
    );
  };

  BettingPlace.prototype.addPlayer = function (player) {
    this.players.push(player);
  };

  function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.players = [];
  }

  BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
    this.bettingPlaces.push(bettingPlace);
    this.players = this.players.concat(bettingPlace.players);
  };

  BettingHouse.prototype.getBettingHouseData = function () {
    let data =
      this.competition +
      ", " +
      this.bettingPlaces.length +
      " betting places, " +
      this.players.length +
      " bets\n";

    this.bettingPlaces.forEach((place) => {
      data += place.getBettingPlaceData() + "\n";
      place.players.forEach((player) => {
        data += player.getPlayerData() + "\n";
      });
    });
    let countryCount = {};
    this.players.forEach((player) => {
      if (!countryCount[player.country.name]) {
        countryCount[player.country.name] = 1;
      } else {
        countryCount[player.country.name]++;
      }
    });
    data += "There are ";
    Object.keys(countryCount).forEach((key, index) => {
      if (index === Object.keys(countryCount).length - 1) {
        data += "and ";
      }
      data += countryCount[key] + " bets on " + key + " ";
    });
    return data;
  };
  const createPlayer = function (
    name,
    surname,
    dateOfBirth,
    betAmount,
    country
  ) {
    let person = new Person(name, surname, new Date(dateOfBirth));
    return new Player(person, betAmount, country);
  };
  const createBettingPlace = function (
    country,
    city,
    postalCode,
    street,
    number
  ) {
    let address = new Address(country, city, postalCode, street, number);
    return new BettingPlace(address);
  };
  let serbia = new Country("SR", 2, Continent.EU);
  let greece = new Country("GR", 3, Continent.EU);
  let player1 = createPlayer("Pera", "Peric", "01/01/1994", 500, serbia);
  let player2 = createPlayer("Mika", "Mikic", "01/01/1995", 600, serbia);
  let player3 = createPlayer("Laza", "Lazic", "01/01/1996", 700, greece);
  let player4 = createPlayer("Zika", "Zikic", "01/01/1997", 800, greece);
  let bettingPlace1 = createBettingPlace(
    "SR",
    "Belgrade",
    "11000",
    "Nemanjina",
    "4"
  );
  let bettingPlace2 = createBettingPlace(
    "GR",
    "Athens",
    "10000",
    "Panepistimiou",
    "6"
  );
  bettingPlace1.addPlayer(player1);
  bettingPlace1.addPlayer(player2);
  bettingPlace2.addPlayer(player3);
  bettingPlace2.addPlayer(player4);
  let bettingHouse = new BettingHouse("Football World Cup Winner");
  bettingHouse.addBettingPlace(bettingPlace1);
  bettingHouse.addBettingPlace(bettingPlace2);
  console.log(bettingHouse.getBettingHouseData());
})();
