// find the number of 

function a(max_val)  {
    for (let i = 0; i < max_val; i++) {
        
    }
}

let ffs = [a(12000), a(999999999), a(400)]; 

async function time_funcs(functions) {
    let ts = new Array(3); 
    //for(f of functions) {
     try{   let t1 = performance.now(); 
        await functions[0]; 
        let t2 = performance.now(); 
        return t2-t1; 
        //ts.push(t2-t1); 
     }
     catch (error){
        console.log(error); 
     }
     //}
    return ts; 
}

console.log('time: ', time_funcs(ffs)); 