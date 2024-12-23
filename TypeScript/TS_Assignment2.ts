function convertShoeSizeEuToUs(size:number):number{
    const offset:number =33;
    return size-offset;
}
console.log(convertShoeSizeEuToUs(44))
function convertShoeSizeUsToEu(size:number):number{
    const offset:number =33;
    return size+offset;
}
console.log(convertShoeSizeUsToEu(8))