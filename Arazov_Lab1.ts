const fruits: [string, number][] = [["apple", 2.5], ["banana", 1.8], ["orange", 3.0]];
function totalCost(items: [string, number][]): number {
    let sum = 0;
    for (const item of items){
        item[0]
        item[1]
        sum+= item[1]
    }
    return sum;
}

const result = totalCost(fruits);
console.log(result);