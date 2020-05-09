
let coins = [5,2,1]; 
let amount = 11; 


function min_coins(coins, amt) {
    let i = 0;
    let num_coins = 0;
    let coins_used = [];
    while(amount > 0) {
        if(amount >= coins[i]) {
            amount -= coins[i]; 
            num_coins++;
            coins_used.push(coins[i]); 
        }
        else {
            if(i == coins.length){
                break; 
            }
            i++; 
        }
    }
    return num_coins; 
}


console.log('num coins = ', min_coins(coins, amount)); 

