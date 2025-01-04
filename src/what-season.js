const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = ["winter", "spring", "summer", "fall"];

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  validateDate(date);

  let month = date.getMonth();
  if ((month >= 0 && month <= 1) || month === 11) {
    return season[0];
  }

  if (month >= 2 && month <= 4) {
    return season[1];
  }

  if (month >= 5 && month <= 7) {
    return season[2];
  }

  if (month >= 8 && month <= 10) {
    return season[3];
  }
}

function validateDate(dateToValidate) {
  if (!(Object.prototype.toString.call(dateToValidate) === "[object Date]")) {
    throw new Error("Invalid date!");
  }

  for (let key in dateToValidate) {
    if (key === "toString") throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
