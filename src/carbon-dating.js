const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(remaining) {
   const remainingNumber = Number(remaining);
   const rateOfDecay = Math.log(2) / HALF_LIFE_PERIOD
   const quantity = MODERN_ACTIVITY / remainingNumber;
   const t = Math.log(quantity) / rateOfDecay
   console.log(remainingNumber)
   if ((typeof remaining) !== 'string') { return false }
   else if ((remainingNumber) == 0) { return false }
   else if ((remainingNumber) > MODERN_ACTIVITY) { return false }
   else if (isNaN(t)) { return false }
   else { return Math.floor(t) }

}

module.exports = {
   dateSample
};
