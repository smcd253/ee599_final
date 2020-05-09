
let coins = [5,2,1]; 
let amount = 11; 
let i = 0;
let num_coins = 0;
while(amount > 0) {
    if(amount >= coins[i]) {
        amount -= coins[i]; 
        num_coins++;
    }
    else {
        if(i == coins.length){
            break; 
        }
        i++; 
    }
}

console.log('num coins = ', num_coins); 

