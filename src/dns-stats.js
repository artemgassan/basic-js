const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const preparedDomains = domains.map((el) =>
      el
          .split(".")
          .reverse()
          .map((elem) => `.${elem}`)
  );

  preparedDomains.forEach((elem) => {
    elem.reduce((str, el) => {
      const temp = `${str}${el}`;
      obj[temp] = obj[temp] + 1 || 1;
      return temp;
    }, "");
  });

  return obj;
}

module.exports = {
  getDNSStats
};
