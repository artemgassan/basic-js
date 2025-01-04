const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const set = new Set([...s1, ...s2]);
  const obj1 = mapStringIntoObject(s1);
  const obj2 = mapStringIntoObject(s2);
  const setArr = Array.from(set);

  return setArr.reduce((count, el) => {
    const el1Count = obj1[el];
    const el2Count = obj2[el];

    if (el1Count && el2Count) {
      count += el1Count >= el2Count ? el2Count : el1Count;
    }

    return count;
  }, 0);
}

function mapStringIntoObject(s) {
  return [...s].reduce((acc, b) => {
    acc[b] = acc[b] ? acc[b] + 1 : 1;
    return acc;
  }, {});
}

module.exports = {
  getCommonCharacterCount
};
