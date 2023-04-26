function checkYear() {
  const yearInput = document.getElementById("year");
  const year = yearInput.value;

  if (isLeapYear(year)) {
    alert(`${year} is a leap year!`);
  } else {
    alert(`${year} is not a leap year.`);
  }
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
