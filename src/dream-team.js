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
   console.log(nameList)
   if (nameList != null) {
      for (i = 0; i < nameList.length; i++) {
         //console.log('List ' + nameList[i])
         if (typeof nameList[i] === 'string') {
            let name = nameList[i]
            //console.log('name ' + name)
            for (j = 0; j < name.length; j++) {
               //console.log('firstLiter ' + name[j])
            } firstLiterName.push(name[0])
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
      // console.log(firstLiterName.length)
      firstLiterNameSort = firstLiterName.sort()
      console.log(firstLiterNameSort)
      //if (firstLiterNameSort.includes('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')) {
      let nameArray = String(firstLiterNameSort.join(''))
      //console.log(nameArray)
      return nameArray
      //}      else { return false }
   }
   else { return false }

}

module.exports = {
   createDreamTeam
};
