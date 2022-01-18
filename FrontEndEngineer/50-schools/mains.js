//Create School superclass
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  quickFacts() {
    return (
      this._name +
      " educates " +
      this._numberOfStudents +
      " students at the " +
      this._level +
      " school level."
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const totalSubstitutes = substituteTeachers.length;
    const randomIndex = Math.floor(Math.random() * (totalSubstitutes - 1));
    return substituteTeachers[randomIndex];
  }
}

//Create PrimarySchool subclass
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "Primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//Create MiddleSchool subclass
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "Middle", numberOfStudents);
  }
}

//Create HighSchool subclass
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "High", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

//Create PrimarySchool instance
const substituteTeachers = [
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
];
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
console.log("*****TESTING PRIMARY SCHOOL INSTANCE*****");
console.log(lorraineHansbury.quickFacts());
console.log(
  "Today's substitute teacher will be: " +
    School.pickSubstituteTeacher(substituteTeachers)
);
console.log("We received exchange students this year!!");
lorraineHansbury.numberOfStudents = 520;
console.log(lorraineHansbury.quickFacts());
console.log("Our pickup policy is: " + lorraineHansbury.pickupPolicy);
console.log(" \n \n");

//Create MiddleSchool instance
const sfs = new MiddleSchool("San Francisco Solano", 420);
console.log("*****TESTING MIDDLE SCHOOL INSTANCE*****");
console.log(sfs.quickFacts());
console.log(
  "Today's substitute teacher will be: " +
    School.pickSubstituteTeacher(substituteTeachers)
);
console.log("We received exchange students this year!!");
sfs.numberOfStudents = 430;
console.log(sfs.quickFacts());
console.log("\n\n");

//Create HighSchool instance
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log("*****TESTING HIGH SCHOOL INSTANCE*****");
console.log(alSmith.quickFacts());
console.log(
  "Today's substitute teacher will be: " +
    School.pickSubstituteTeacher(substituteTeachers)
);
console.log("We sent some exchange students to Argentina this year!!");
alSmith.numberOfStudents = 410;
console.log(alSmith.quickFacts());
console.log("Our sports teams are: " + alSmith.sportsTeams);
console.log(" \n \n");
