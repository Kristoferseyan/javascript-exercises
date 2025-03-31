const fibonacci = function(input) {
    if (input < 0) return "OOPS";
    const n = parseInt(input);
    
    
    if (n < 0) return "ERROR";
    
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    
    let prev = 1;
    let curr = 1;
    
    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
};

module.exports = fibonacci;
