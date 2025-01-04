const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  return members
      .reduce((dreamTeamName, memberName) => {
        if (typeof memberName !== "string") {
          return dreamTeamName;
        }

        dreamTeamName = `${dreamTeamName}${firstLetterOfName(memberName)}`;
        return dreamTeamName;
      }, "")
      .split("")
      .sort()
      .join("");
}

function firstLetterOfName(elem) {
  return elem.trim()[0]?.toUpperCase() ?? "";
}

module.exports = {
  createDreamTeam
};
