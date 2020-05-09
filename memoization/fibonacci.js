let eval = 100;

let memo = {};
function fib_memo(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    if(n in memo) {
        return memo[n];
    }
    else {
        memo[n] = fib_memo(n - 1) + fib_memo(n - 2);
    }
    return memo[n];
}

function fib_reg(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    return fib_reg(n - 1) + fib_reg(n - 2);
}

console.log(`fib_reg of ${eval} = ${fib_reg(eval)}`);
console.log(`fib_memo of ${eval} = ${fib_memo(eval)}`);
