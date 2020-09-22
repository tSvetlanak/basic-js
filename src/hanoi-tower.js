const CustomError = require("../extensions/custom-error");


//throw new CustomError('Not implemented');
// remove line with error and write your code here
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = { turns: 0, seconds: 0 };
    obj.turns = parseFloat(String(Math.pow(2, disksNumber))) - 1;
    obj.seconds = obj.turns / (turnsSpeed / 3600);
    return obj;

};