const { ERROR_MESSAGE, NUMBER_VALUE } = require("../constants/index");

const isValidType = (values) => {
  return values.every((value) => !isNaN(value));
};

const isValidRange = (values) => {
  return values.every(
    (value) => value >= NUMBER_VALUE.MIN && value <= NUMBER_VALUE.MAX
  );
};

const isValidUnique = (values) => {
  const set = new Set();

  values.forEach((value) => {
    set.add(value);
  });

  return set.size === values.length;
};

const isValid = (userNumber) => {
  const userNumberArray = userNumber.split("").map((value) => Number(value));

  if (!isValidType(userNumberArray)) {
    throw ERROR_MESSAGE.TYPE_ERROR;
  }

  if (!isValidRange(userNumberArray)) {
    throw ERROR_MESSAGE.RANGE_ERROR;
  }

  if (!isValidUnique(userNumberArray)) {
    throw ERROR_MESSAGE.UNIQUE_ERROR;
  }

  return true;
};

module.exports = { isValid };
