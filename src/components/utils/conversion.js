export function binaryToDecimal(binary) {

    if(typeof binary !== "string") return 0

    else return parseInt(binary, 2)
}

export function decimalToBinary(decimal) {

    if(typeof decimal === "number") return (decimal.toString(2))
    
    else return parseInt("0", 2).toString(2)
}