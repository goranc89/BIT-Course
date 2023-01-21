"use strict";

(function () {
  function Genre(name) {
    this.name = name;
  }
  Genre.prototype.getData = function () {
    return (
      this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase()
    );
  };

  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
  }
  Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
  };

  //   function Program(date) {
  //     this.date = new Date(date);
  //     this.listOfMovies = [];
  //     this.numberOfMovies = 0;
  //   }
  //   function Program(date) {
  //     this.date = new Date(Date.parse(date));
  //     this.listOfMovies = [];
  //     this.numberOfMovies = 0;
  //   }
  function Program(date) {
    var dateParts = date.split(".");
    this.date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
  }

  Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.numberOfMovies++;
  };
  Program.prototype.getData = function () {
    var programLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
      programLength += this.listOfMovies[i].length;
    }

    var movieData = "";
    for (var i = 0; i < this.listOfMovies.length; i++) {
      movieData += "\t" + this.listOfMovies[i].getData() + "\n";
    }

    return (
      this.date.toLocaleDateString() +
      ", program duration " +
      programLength +
      "min\n" +
      movieData
    );
  };

  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
  }
  Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
    this.numberOfMovies += program.numberOfMovies;
  };
  Festival.prototype.getData = function () {
    var programData = "";
    for (var i = 0; i < this.listOfPrograms.length; i++) {
      programData += this.listOfPrograms[i].getData() + "\n";
    }

    return (
      this.name +
      " has " +
      this.numberOfMovies +
      " movie titles\n" +
      programData
    );
  };

  function createMovie(title, length, genre) {
    var genreObject = new Genre(genre);
    return new Movie(title, genreObject, length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  var festival = new Festival("Weekend festival");
  var program1 = createProgram("28.10.2017");
  var program2 = createProgram("29.10.2017");
  //   var program1 = createProgram(Date.parse("28.10.2017"));
  //   var program2 = createProgram(Date.parse("29.10.2017"));

  var movie1 = createMovie("Spider-Man: Homecoming", 133, "action");
  var movie2 = createMovie("War for the Planet of the Apes", 140, "drama");
  var movie3 = createMovie("The Dark Tower", 95, "western");
  var movie4 = createMovie("Deadpool", 108, "comedy");
  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program1.addMovie(movie3);

  program2.addMovie(movie4);

  festival.addProgram(program1);
  festival.addProgram(program2);

  console.log(festival.getData());
})();
