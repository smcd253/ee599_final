
let max_sum = -9999; 
let i1 = -1;
let i2 = -1; 

let arr = [-2,1,-3,4,-1,2,1,-5,4];
let LSCS = new Array(arr.length); 
let sum = 0; 

LSCS[0] = arr[0]; 
let cur_max = LSCS[0];
for(let i = 1; i < arr.length; i++) {
    LSCS[i] = Math.max(LSCS[i-1] + arr[i], arr[i]); 
    cur_max = Math.max(LSCS[i], cur_max); 
}   
// if input[i] is part of previous subarray
// if input[i] is part of a new sub_array
console.log('Max is ', cur_max); 


