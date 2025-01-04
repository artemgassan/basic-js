const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
        typeof position !== "number" ||
        this.getLength() < position ||
        position <= 0
    ) {
      this.res.splice(0, this.getLength());
      throw new Error("You can't remove incorrect link!");
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let tempres = this.res.join("~~");
    this.res.splice(0, this.getLength());
    return tempres;
  },
};

module.exports = {
  chainMaker
};
