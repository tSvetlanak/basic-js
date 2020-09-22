const CustomError = require("../extensions/custom-error");


//throw new CustomError('Not implemented');
// remove line with error and write your code here
module.exports = function repeater(str, options) {

    let sNew = new String();
    arr = [];
    if (!!!options.repeatTimes) options.repeatTimes = 1;
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (!!!options.separator) { separator = '+'; } else { separator = options.separator }
    if (options.addition === undefined) { addition = ''; } else { addition = String(options.addition); }
    if (!!!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    if (!!!options.additionSeparator) options.additionSeparator = '|';

    for (let i = 1; i <= options.repeatTimes; i++) {
        arr.push(`${str}`);
        if (addition != '') {
            for (let j = 1; j <= options.additionRepeatTimes; j++) {
                arr.push(`${addition}`);
                arr.push(`${options.additionSeparator}`);
            }
            arr.pop();
        }
        arr.push(String(separator));
    }
    arr.pop();
    sNew = arr.join('');
    return sNew;

};