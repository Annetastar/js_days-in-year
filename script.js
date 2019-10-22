function findYear(year) {
  if (typeof(year) === 'number') {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
}

function daysInYear(year) {
  try {
    if (!Number.isInteger(year) || !Number(year) > 0) {
      throw new Error();
    }
    return findYear(year) ? 366 : 365;
  } catch (error) {
    return 'exception';
  }
}
