const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


//  throw new CustomError('Not implemented');
// remove line with error and write your code here
module.exports = function dateSample(sampleActivity) {
    let oldActivity = parseFloat(sampleActivity);
    if (typeof sampleActivity != 'string' || (oldActivity <= 0) || (oldActivity > MODERN_ACTIVITY) || (isNaN(oldActivity) == true)) {
        return false;
    } else {
        time = Math.ceil(Math.log(MODERN_ACTIVITY / oldActivity) / (0.693 / HALF_LIFE_PERIOD));
        return time;
    }
};