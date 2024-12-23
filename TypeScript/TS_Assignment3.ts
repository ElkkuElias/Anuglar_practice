type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(array:number[]): ArrayValues{
    let sum: number = 0;    
    let count: number = 0; 
    for(let i:number =0;i<array.length;i++ ){
      sum += array[i]
      count ++  
    }
    return{
        sum,
        count
    };
}
const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);