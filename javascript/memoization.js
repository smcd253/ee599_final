let eval = process.argv[2];

let memo = {};
let memo_usage_map = {};
function fib_memo(n) {
    if(n in memo_usage_map) memo_usage_map[n]++;
    else memo_usage_map[n] = 1;
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

// with usage map
let usage_map = {};

function fib_reg(n) {
    if(n in usage_map) usage_map[n]++;
    else usage_map[n] = 1;
    if (n == 0 || n == 1) {
        return 1;
    }

    return fib_reg(n - 1) + fib_reg(n - 2);
}

console.log(`fib_reg of ${eval} = ${fib_reg(eval)}`);
console.log('usage_map = ');
console.log(usage_map);
console.log(`fib_memo of ${eval} = ${fib_memo(eval)}`);
console.log('memo_usage_map = ');
console.log(memo_usage_map);