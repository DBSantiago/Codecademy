function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Incorrect day given.";
      break;
  }
}

function getActualSleepHours() {
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  let totalHoursSlept = 0;
  for (let i = 0; i < days.length; i++) {
    totalHoursSlept += getSleepHours(days[i]);
  }
  return totalHoursSlept;
}

function getIdealSleepHours() {
  let idealHoursPerNight = 8;
  return idealHoursPerNight * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return "You got the perfect amount of sleep!";
  } else if (actualSleepHours > idealSleepHours) {
    let hoursOver = actualSleepHours - idealSleepHours;
    return `You overslept ${hoursOver} hours this week.`;
  } else {
    let hoursUnder = idealSleepHours - actualSleepHours;
    return `You need to sleep ${hoursUnder} hours more this week.`;
  }
}

console.log(calculateSleepDebt());
