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

function createDreamTeam(nameList) {
   if (!Array.isArray(nameList)) { return false };
   let firstLiterName = []
   let filterName = nameList.filter(e => typeof e === 'string');
   for (i = 0; i < filterName.length; i++) {
      firstLiterName.push(String(filterName[i]).replace(/\s/g, '').slice(0, 1).toUpperCase());

   } let nameArray = (firstLiterName.sort().join(''))
   return nameArray
}
createDreamTeam()
module.exports = {
   createDreamTeam
};
