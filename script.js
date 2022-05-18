function curry(func) {
    let args = [];
    let isFlagToReset = false;

    let selfRetFunc = function(...str) {
        if (isFlagToReset) {
            isFlagToReset = false;
            
            args = [];
        }

        args.push(str);

        return selfRetFunc;
    }

    let getResult = function(isOrdinaryCall = false) {
        if (isOrdinaryCall) {
            return Function.prototype.toString.call(selfRetFunc);
        }
        
        isFlagToReset = true;
        
        return func(args);
    }
    
    selfRetFunc.toString = getResult;
    
    return selfRetFunc;
}

function concatSpec(strs) {
    let separator = '';
    let result = '';

    for (let str of strs) {
        if (str[0] && typeof str[0] !== 'string') {
            return result;
        }
        
        if (str[0]) {
            result += str[0];
        }
        
        if (str[1]) {
            separator = str[1];
        }
        
        result += separator;
    }

    return result;
}

const CONCAT_STRINGS = curry(concatSpec);

class Calculator {
    constructor(firstValue, secondValue) {
        const checkValues = !Number.isInteger(firstValue)
                        || !Number.isInteger(secondValue);
        
        if (checkValues || arguments.length !== 2) {
            throw new Error ('Incorrect');
        } else {
            this.firstValue = firstValue;

            this.secondValue = secondValue;
        }
    }

    setX = (num) => {
        if (!Number.isInteger(num)) {
            throw new Error ('Incorrect');
        } else {
            console.log(this.firstValue = num);
        }
    }

    setY = (num) => {
        if (!Number.isInteger(num)) {
            throw new Error ('Incorrect');
        } else {
            console.log(this.secondValue = num);
        }
    }

    logSum = () => {
        console.log(this.firstValue + this.secondValue);
    }

    logMul = () => {
        console.log(this.firstValue * this.secondValue);
    }

    logSub = () => {
        console.log(this.firstValue - this.secondValue);
    }

    logDiv = () => {
        if (this.secondValue === 0) {
            throw new Error ('Incorrect');
        } else {
            console.log(this.firstValue / this.secondValue);
        }
    }
}