module.exports = function repeater(str = ``, {repeatTimes = 1, separator = `+`, addition = ``, additionRepeatTimes = 1, additionSeparator}) {
  let additionalStringArray = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionalStringArray.push(`${addition}`);
  }

  let additionalString = additionalStringArray.join(additionSeparator);
  let resultArrayString = [];

  for (let i = 0; i < repeatTimes; i++) {
    resultArrayString.push(`${str}${additionalString}`);
  }
  return resultArrayString.join(separator);
};
  