const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {
        this.arr.length;
        return this;
    },
    addLink(value) {
        if (value == undefined && value != null) this.arr.push(' ')
        else this.arr.push(value);
        return this;
    },
    removeLink(position) {
        if (position - 1 < 0 || typeof position !== "number" || position - 1 > this.arr.length - 1) {
            this.arr = [];
            throw new Error();
        } else this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        chain = '';
        for (let i = 0; i < this.arr.length; i++) {
            if (i == this.arr.length - 1) chain += "( " + this.arr[i] + " )";
            else chain += "( " + this.arr[i] + " )" + "~~";

        }
        this.arr = [];
        return chain;
    }
};

module.exports = chainMaker;