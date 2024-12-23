function calcArray(array) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        count++;
    }
    return {
        sum: sum,
        count: count
    };
}
var arrayNumbers = [1, 5, 5, 5, 6];
var test = calcArray(arrayNumbers);
console.log("Sum: ".concat(test.sum, " & count: ").concat(test.count));
