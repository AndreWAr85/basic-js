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
let firstLiterName = []
function createDreamTeam(nameList) {
   if (!Array.isArray(nameList)) { return false };

   let filterName = nameList.filter(e => typeof e === 'string');
   for (i = 0; i < filterName.length; i++) {
      //if (typeof nameList[i] === 'string') {
      //let nameLast = nameList[i].trim()
      //let name = nameLast.toUpperCase()
      //console.log('name ' + name)
      //let nameIterator = name[Symbol.iterator]()
      //literName = nameIterator.next().value
      // console.log(literName)
      firstLiterName.push((filterName[i]).replace(/\s/g, '').slice(0, 1).toUpperCase());

   } let nameArray = String(firstLiterName.sort().join(''))
   return nameArray
}
createDreamTeam()
module.exports = {
   createDreamTeam
};
