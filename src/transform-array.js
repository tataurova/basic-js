const isElementForModify = (el) => el !== `--double-next` && el !== `--double-prev`
    && el !== `--discard-next` && el !== `--discard-prev`;

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (isElementForModify(arr[i])) {
        let count = 1; // number of repetitions of the element in transformed array

        if (typeof(arr[i - 1]) !== `undefined`) { // prev rule
          if (typeof (arr[i - 1]) === `string` && arr[i - 1].includes(`-next`)) {
            if (arr[i - 1].includes(`--double`)) {
              count *= 2;
            } else {
              count--;
            }
          }
        }
        if (typeof(arr[i + 1]) !== `undefined`) { // next rule
          if (typeof (arr[i + 1]) === `string` && arr[i + 1].includes(`-prev`)) {
            if (arr[i + 1].includes(`--double`)) {
              count === 2 ? count = 3 : count *= 2;
            } else {
              count--;
            }
          }
        }
        for (let j = 1; j <= count; j++) { // adding of the element in transformed array
          result.push(arr[i]);
        }
      }
    }
    return result;
  } else throw Error();
};
