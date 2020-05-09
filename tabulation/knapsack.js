
let cap = 10; 

class item {
    constructor(weight, value) {
        this.weight = weight;
        this.value = value; 
    }
}

let items = [new item(3,6), new item(2,5), new item(4,10), new item(5,60)]; 

let f_iw = new Array(items.length); 

let i = 0;
for(i = 0; i < items.length; i++) {
    if(items[i].value <= cap) {
        f_iw[i] = items[i].value;
        break; 
    }
    else {
        f_iw[i] = 0; 
    }
}
i++;
for(i; i < items.length; i++) {
    if(f_iw[i-1] + items[i].weight); 
}    

