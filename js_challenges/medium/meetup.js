function meetupDay(year, month, day, ending) {

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let dayInMonth;
  let monthYear;
  let dayOfWeek;
  let start;

  if (ending === "teenth") {
    start = parse(13, year, month, day, days);
    dayInMonth = start;
  }

  if (ending === "1st") {
    start = parse(1, year, month, day, days);
    dayInMonth = start;
  }

  if (ending === "2nd") {
    start = parse(1, year, month, day, days);
    dayInMonth = start + 7;
  }

  if (ending === "3rd") {
    start = parse(1, year, month, day, days);
    dayInMonth = start + 14;
  }

  if (ending === "4th") {
    start = parse(1, year, month, day, days);
    dayInMonth = start + 21;
  }

  if (ending === "5th") {
    let numOfDays = findDaysInAMonth(year, month);

    start = parse(1, year, month, day, days);
    dayInMonth = start + 28;

    if (dayInMonth > numOfDays) {
      throw new Error();
    }
  }

  if (ending === "last") {
    start = findDaysInAMonth(year, month);

    while (true) {
      monthYear = new Date(year, month, start);
      dayOfWeek = days[monthYear.getDay()];

      if (dayOfWeek === day) {
        break;
      } else {
        start -= 1;
      }
    }
    dayInMonth = start;
  }

  return new Date(year, month, dayInMonth);
}

function parse(start, givenYear, givenMonth, givenDay, daysArr) {
  while (true) {
    let monthYear = new Date(givenYear, givenMonth, start);
    let dayOfWeek = daysArr[monthYear.getDay()];
    if (dayOfWeek === givenDay) {
      break;
    } else {
      start += 1;
    }
  }
  return start;
}

const findDaysInAMonth = (givenYear, givenMonth) => {
  let nextMonthDate = new Date(givenYear, givenMonth + 1, 1);
  return new Date(nextMonthDate - 1).getDate();
}

module.exports = meetupDay;
