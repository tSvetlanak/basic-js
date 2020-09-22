const CustomError = require("../extensions/custom-error");

// throw new CustomError('Not implemented');
// remove line with error and write your code here
module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let str = '';
        let newMembers = members.map(element => {
            if (typeof element === 'string') {
                return element.trim().toUpperCase();
            } else {
                element = '';
                return element;
            }
        });
        let newMembersTwo = newMembers.sort();
        newMembersTwo.forEach(element => {
            if (element.length != 0) {
                str = str + element[0];
            }
        });
        return str;
    } else { return false; }
};