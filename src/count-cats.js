const CustomError = require("../extensions/custom-error");
// throw new CustomError('Not implemented');
// remove line with error and write your code here
module.exports = function countCats(matrix) {
    var count = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (Array.isArray(matrix[i])) {
            count = count + matrix[i].filter(item => item === "^^").length
        }
    }
    return count;
};