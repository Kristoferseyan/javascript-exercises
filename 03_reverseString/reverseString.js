const reverseString = function(string) {
    const reversedString = [];
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        let letter = '';
        letter += string.charAt(string.length - count);
        count ++;
        reversedString.push(letter);
    }
    return reversedString.join('');

};

// Do not edit below this line
module.exports = reverseString;
