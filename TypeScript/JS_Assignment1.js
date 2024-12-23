
function arraySum(array){
    let sum = 0;
    for (let i= 0;i<array.length;i++){
        sum += array[i];
    }
    return sum;
}
console.log(arraySum([5,5,1,3]));