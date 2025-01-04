const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (!arr.length) {
    return arr;
  }

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    const lastElement = resultArr[resultArr.length - 1];

    if (arr[i] === "--discard-next") i++;
    else if (arr[i] === "--discard-prev") {
      if (
          typeof lastElement !== "undefined" &&
          arr[i - 2] !== "--discard-next"
      ) {
        resultArr.splice(resultArr.length - 1, 1);
      }
    } else if (arr[i] === "--double-next") {
      if (typeof arr[i + 1] !== "undefined") {
        resultArr.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (
          typeof arr[i - 1] !== "undefined" &&
          arr[i - 2] !== "--discard-next"
      ) {
        resultArr.push(arr[i - 1]);
      }
    } else resultArr.push(arr[i]);
  }
  return resultArr;
}

module.exports = {
  transform
};
