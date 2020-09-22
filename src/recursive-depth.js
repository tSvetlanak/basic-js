const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        let finalDepth = 0;
        if (Array.isArray(arr)) {
            finalDepth = 1;
            for (let item of arr) {
                depth = 1;
                if (Array.isArray(item)) {
                    depth += this.calculateDepth(item);
                    if (finalDepth < depth) { finalDepth = depth; }
                }
            }
            return finalDepth;
        }
    }
};