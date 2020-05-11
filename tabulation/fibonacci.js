
// source: https://miniwebtool.com/list-of-fibonacci-numbers/?number=20

function fib_tab(n) {
    let mem = new Array(n+1); 
    mem[0] = 0;
    mem[1] = 1;
    for(let i = 2; i <= n; i++) {
        mem[i] = mem[i-1] + mem[i-2]; 
    }
    return mem[n]; 
}

console.log('fib(4) = ', fib_tab(4)); 
console.log('Expected = 3'); 

console.log('fib(19) = ', fib_tab(19)); 
console.log('Expected = 4181'); 

