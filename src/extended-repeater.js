const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
    str,
    {
      separator = "+",
      additionSeparator = "|",
      addition,
      additionRepeatTimes,
      repeatTimes,
    }
) {
  let additionStr = "";

  if (addition !== undefined) {
    additionStr = subRepeater(addition, additionRepeatTimes, additionSeparator);
  }

  return subRepeater(`${str}${additionStr}`, repeatTimes, separator);
}

function subRepeater(str, count, separator) {
  const string = `${str}${separator}`;

  return `${string.repeat(count - 1)}${str}`;
}

module.exports = {
  repeater
};
