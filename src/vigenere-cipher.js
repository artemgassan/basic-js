const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(instance = true) {
    this.instance = instance;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let res = "";
    const adjustedKey = this.adjustKey(string, key);
    const adjustedString = this.adjustString(string);
    let j = 0;

    for (let i = 0; i < adjustedString.length; i++) {
      if (
          this.ascii(adjustedString[i]) < 65 ||
          this.ascii(adjustedString[i]) > 90
      ) {
        j++;
        res += adjustedString[i];
        continue;
      }

      res += this.encryptLetter(adjustedString[i], adjustedKey[i - j]);
    }

    return this.instance === true ? res : res.split("").reverse().join("");
  }

  decrypt(string, key) {
    let res = "";
    if (string == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }
    key = this.adjustKey(string, key);
    string = this.adjustString(string);
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.ascii(string[i]) < 65 || this.ascii(string[i]) > 90) {
        j++;
        res += string[i];
        continue;
      }
      res += this.decryptLetter(string[i], key[i - j]);
    }
    return this.instance === true ? res : res.split("").reverse().join("");
  }

  adjustKey(string, key) {
    if (key.length < string.length) {
      let temp = key.padEnd(string.length, key);
      return temp.toUpperCase();
    }

    return key.toUpperCase();
  }

  adjustString(string) {
    return string.toUpperCase();
  }

  encryptLetter(strLetter, keyLetter) {
    const strCode = this.ascii(strLetter) - 65;
    const keyCode = this.ascii(keyLetter) - 65;
    const sum = 65 + strCode + keyCode;
    const encryptedCode = sum > 90 ? sum - 26 : sum;

    return this.asciiLetter(encryptedCode);
  }

  decryptLetter(strLetter, keyLetter) {
    const strCode = this.ascii(strLetter) - 65;
    const keyCode = this.ascii(keyLetter) - 65;
    const sum = 26 + strCode - keyCode;
    const diff = sum + 65;
    const decryptedCode = diff > 90 ? diff - 90 + 65 - 1 : diff;

    return this.asciiLetter(decryptedCode);
  }

  ascii(letter) {
    return letter.charCodeAt(0);
  }

  asciiLetter(code) {
    return String.fromCharCode(code);
  }
}

module.exports = {
  VigenereCipheringMachine
};
