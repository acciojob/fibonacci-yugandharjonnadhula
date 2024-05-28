function fibonacci(num) {
// your code here\
	 let a = 0, b = 1, next;

    // Iteratively calculate the Fibonacci number
    for (let i = 2; i <= num; i++) {
        next = a + b;
        a = b;
        b = next;
    }

    return b;
}

// module.exports = fibonacci;
