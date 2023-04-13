const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return umber} count of cats found{N
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
let countCat = [
   [0, 1, '^^'],
   [0, '^^', 2],
   ['^^', 1, 2]
]

function countCats(countCat) {

   let cats = []
   for (let i = 0; i < countCat.length; i++) {
      for (let j = 0; j < countCat[i].length; j++) {
         a = countCat[i][j];
         console.log()
         if (a === '^^') {
            cats.push(a)

         }
      }
   } return cats.length
}


countCats(countCat)

module.exports = {
   countCats
};
