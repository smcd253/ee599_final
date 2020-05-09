
function fib_memo(n) {
    let mem = new Array(n+1); 
    mem[0] = 1;
    mem[1] = 1;
    for(let i = 2; i <= n; i++) {
        mem[i] = mem[i-1] + mem[i-2]; 
    }
    return mem[n]; 
}

console.log('fib(4) = ', fib_memo(4)); 
console.log('Expected = 5'); 

