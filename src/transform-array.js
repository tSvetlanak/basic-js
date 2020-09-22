const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw "message";
    if (arr.length == 0) return arr;
    let listArr = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];
    for (let i = 0; i < listArr.length; i++) {
        let idx = arr.indexOf(listArr[i]);
        while (idx != -1) {
            if (i == 0) {
                if (idx < (arr.length - 1)) { arr[idx] = arr[idx + 1]; } else { arr.splice(idx, 1); }
                idx = arr.indexOf(listArr[i]);
            }
            if (i == 1) {
                if (idx > 0) { arr[idx] = arr[idx - 1]; } else { arr.splice(idx, 1); }
                idx = arr.indexOf(listArr[i]);
            }
            if (i == 2) {
                if (idx < (arr.length - 1)) { arr.splice(idx, 2); } else { arr.splice(idx, 1); }
                idx = arr.indexOf(listArr[i]);
            }
            if (i == 3) {
                if (idx > 0) { arr.splice(idx - 1, 2); } else { arr.splice(0, 1); }
                idx = arr.indexOf(listArr[i]);
            }
        }


    }
    return arr;
};