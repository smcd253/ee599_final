let eval = process.argv[2];

function fib_tab(n) {
    let tab = new Array(eval + 1);
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            tab[i] = 1;
        }
        else {
            tab[i] = tab[i - 1] + tab[i - 2];
        }
    }
    return tab[n];
}

console.log(`fib_tab(${eval} = ${fib_tab(eval)})`);