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
   if (nameList != null) {
      for (i = 0; i < nameList.length; i++) {
         if (typeof nameList[i] === 'string') {
            let nameLast = nameList[i].trim()
            let name = nameLast.toUpperCase()
            let nameIterator = name[Symbol.iterator]()
            literName = nameIterator.next().value
            firstLiterName.push(literName)
         }
      }
   }
   else if (typeof nameList == "undefined" && "boolean"
   ) {
      return false
   }
   else {
      return false
   }
   if (firstLiterName.length !== 0) {
      firstLiterNameSort = firstLiterName.sort()
      let nameArray = String(firstLiterNameSort.join(''))
      return nameArray
   }
   else { return false }

}
createDreamTeam()
module.exports = {
   createDreamTeam
};
