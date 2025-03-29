const sumAll = function (firstNum, lastNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return "ERROR";
    }
    
    if (firstNum < 0 || lastNum < 0) {
        return "ERROR";
    }

    if (firstNum > lastNum) {
        let fNum = lastNum;
        let lNum = firstNum;
        let sum = 0;
        for (let i = fNum; i <= lNum; i++) {
            sum += i;
        }
        return sum;
    }

    let sum = 0;
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
