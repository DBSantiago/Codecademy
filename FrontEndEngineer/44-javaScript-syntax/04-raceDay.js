let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 27;

if(runnerAge >= 18 && registeredEarly){
  raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
  console.log("Early registered adults run at 9:30AM");
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log("Late registered adults run at 11:30AM");
} else {
  console.log("Youth registrants run at 12:30 pm (regardless of registration).");
}