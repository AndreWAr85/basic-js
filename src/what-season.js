const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   if (date instanceof Date == false || Date == undefined) throw new Error('Invalid date!');

   let time = date.getTime();
   console.log(time)

   let Y = date.getFullYear();
   let monthIndex = date.getMonth();
   let M = monthIndex + 1;
   let D = date.getDate();
   console.log(Y)
   console.log(M)
   console.log(D)
   if (time !== undefined) {
      if (isValidDate(Y, M, D) === false) {
         return 'Error'
      }
   } else { return 'Unable to determine the time of year!' }

   function isValidDate(Y, M, D) {
      var d = new Date(Y, --M, D);
      return Y == d.getFullYear() && M == d.getMonth() && D == d.getDate();
   };

   let utc = date.toUTCString();
   console.log(utc)
   let String = date.toDateString();
   console.log(String)

   if (M < 3 || M == 12) {
      return ("winter")
   } else if (M < 6) {
      return ("spring")
   } else if (M < 9) {
      return ("summer")
   } else { return ("autumn (fall)") }
}

getSeason(new Date(2020, 02, 31))
module.exports = {
   getSeason
};
