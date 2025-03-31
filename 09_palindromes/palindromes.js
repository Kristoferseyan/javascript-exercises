const palindromes = function (input) {
    let cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleanInput === cleanInput.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
