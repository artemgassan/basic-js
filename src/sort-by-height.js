const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArr = arr.filter((el) => el !== -1).sort((a, b) => b - a);
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i] === -1 ? -1 : tempArr.pop();
    resArr.push(elem);
  }
  return resArr;
}


module.exports = {
  sortByHeight
};
