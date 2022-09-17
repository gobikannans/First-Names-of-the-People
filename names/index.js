const country = require("../country/state/city/index");
const utilities = require("../utilities/utils/index");

const getPeopleInCity = (country) => {
  return utilities(country);
};

module.exports = getPeopleInCity;
