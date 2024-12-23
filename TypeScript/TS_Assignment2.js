function convertShoeSizeEuToUs(size) {
    var offset = 33;
    return size - offset;
}
console.log(convertShoeSizeEuToUs(44));
function convertShoeSizeUsToEu(size) {
    var offset = 33;
    return size + offset;
}
console.log(convertShoeSizeUsToEu(8));
