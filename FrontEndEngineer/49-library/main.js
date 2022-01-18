//Create Media superclass
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    const numOfRatings = this._ratings.length;
    const sumOfRatings = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const averageRating = sumOfRatings / numOfRatings;

    return averageRating;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

//Create Book subclass
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//Create Movie subclass
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//Create CD subclass
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

//Creating Book instance
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
console.log("*****TESTING BOOK INSTANCE*****");
console.log("The book title is: " + historyOfEverything.title);
historyOfEverything.toggleCheckOutStatus();
console.log("The book is checked out: " + historyOfEverything.isCheckedOut);
console.log("The book has " + historyOfEverything.pages + " pages");
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
console.log(
  "The book average rating is: " + historyOfEverything.getAverageRating()
);
console.log("\n \n");

//Creating Movie instance
const speed = new Movie("Jan de Bont", "Speed", 116);
console.log("*****TESTING MOVIE INSTANCE*****");
console.log("The movie title is: " + speed.title);
speed.toggleCheckOutStatus();
speed.toggleCheckOutStatus();
console.log("The movie is checked out: " + speed.isCheckedOut);
console.log("The movie runtime is: " + speed.runTime + " minutes");
speed.addRating(7);
speed.addRating(8);
speed.addRating(7);
console.log("The movie average rating is: " + speed.getAverageRating());
console.log("\n \n");

//Creating CD instance
const planetHer = new CD("Doja Cat", "Planet Her", [
  "Woman",
  "Naked",
  "Payday",
  "Get Into It (Yuh)",
  "Need to Know",
  "I Dont Do Drugs",
  "Love to Dream",
  "You Right",
  "Been Like This",
  "Options",
  "Aint Shit",
  "Imagine",
  "Alone",
  "Kiss Me More",
]);
console.log("*****TESTING CD INSTANCE*****");
console.log("The CD title is: " + planetHer.title);
planetHer.toggleCheckOutStatus();
planetHer.toggleCheckOutStatus();
planetHer.toggleCheckOutStatus();
console.log("The CD is checked out: " + planetHer.isCheckedOut);
console.log("The CD song titles are: " + planetHer.songs);
planetHer.addRating(10);
planetHer.addRating(9);
planetHer.addRating(10);
planetHer.addRating(10);
console.log("The CD average rating is: " + planetHer.getAverageRating());
console.log("\n \n");
