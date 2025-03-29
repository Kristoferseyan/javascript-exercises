const removeFromArray = function(arr, ...rest) {
    let modifiedArray = arr;
    for (let i = 0; i < rest.length; i++) {
        let value = rest[i];
        modifiedArray = modifiedArray.filter(num => num !== value);
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
