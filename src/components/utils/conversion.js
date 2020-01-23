export function binaryToDecimal(binary) {
  if (typeof binary !== 'string') return 0;

  return parseInt(binary, 2);
}

export function decimalToBinary(decimal) {
  if (typeof decimal === 'number') return (decimal.toString(2));

  return 0b0.toString(2);
}
