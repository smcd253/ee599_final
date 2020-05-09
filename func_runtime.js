// find the number of 

const { PerformanceObserver, performance } = require('perf_hooks');


async function a(max_val) {
    for (let i = 0; i < max_val; i++) {

    }
}

//let ffs = [a(12000), a(999999999), a(400)]; 
let parameters = [400, 999999999, 12000];

async function time_funcs(input) {
    let ts = [];
    var i = 0;
    for (f of input) {

        try {
            console.log("f: ", f);
            let t1 = performance.now();
            await a(f);
            let t2 = performance.now();

            ts.push(t2 - t1);

            console.log(`time${i}: `, t2 - t1);
            //return t2 - t1;
            i++;
        }
        catch (error) {
            console.log(error);
        }
    }
    return ts;
}


let output = time_funcs(parameters);
output.then(function (result) {
    console.log("output: ", result);
})
