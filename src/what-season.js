const SeasonMonth = {
  1: `winter`,
  2: `winter`,
  3: `spring`,
  4: `spring`,
  5: `spring`,
  6: `summer`,
  7: `summer`,
  8: `summer`,
  9: `autumn`,
  10: `autumn`,
  11: `autumn`,
  12: `winter`,
};

module.exports = function getSeason(date) {
  if (date === null) {
    throw Error(`THROWN`);
  } else if (!date) {
    return `Unable to determine the time of year!`;
  } else if (!(Object.prototype.toString.call(date) === '[object Date]')) {
    throw Error(`THROWN`);
  } else {
    return SeasonMonth[date.getMonth() + 1];
  }
};
