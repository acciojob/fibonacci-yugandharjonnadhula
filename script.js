function fibonacci(num) {
    if (num < 0) {
        throw new Error("Input should be a non-negative integer");
    }

    // Base cases
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;

    // Iteratively calculate the Fibonacci number
    for (let i = 2; i <= num; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return a; // a will be the nth Fibonacci number after the loop
}

// Example usage:
console.log(fibonacci(num));
