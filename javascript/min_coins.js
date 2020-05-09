function max_of_array_with_limit(coins, amount) {
    let i = 0;
    let our_coin = 0;
    while(i < coins.length) {
        let current_coin = coins[i];
        if(amount - current_coin >= 0 && current_coin > our_coin) {
            our_coin = current_coin;
        }
        i++;
    }
    return our_coin;
}

function min_coins(coins, amount) {
    let result = [];
    if(amount > 0) {
        let new_coin = max_of_array_with_limit(coins, amount);
        if(new_coin > 0) {
            result.push(new_coin);
            amount -= new_coin;
            result.push(min_coins(coins, amount));
        }
    }
    return result;
}

console.log("min_coins([1, 2, 5], 11) = " + min_coins([2, 4], 100));