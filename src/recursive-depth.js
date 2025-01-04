const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 0;
  flag = false;

  calculateDepth(arr) {
    if (!this.flag) {
      this.depth = 1;
      this.flag = true;
    }

    if (hasArrays(arr)) {
      this.depth++;
      this.calculateDepth(arr.flat());
    }

    this.flag = false;
    return this.depth;
  }
}

function hasArrays(arr) {
  return arr.some(Array.isArray);
}

module.exports = {
  DepthCalculator
};
