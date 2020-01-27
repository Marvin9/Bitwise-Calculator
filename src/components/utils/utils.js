export function binaryToDecimal(binary) {
  if (typeof binary !== 'string') return 0;

  return parseInt(binary, 2);
}

export function decimalToBinary(decimal) {
  if (typeof decimal === 'number') return (decimal.toString(2));

  return 0b0.toString(2);
}

export function isValidDecimal(dec) {
  const decimalRegex = /[0-9]/g;
  if (dec.match(decimalRegex) && dec.match(decimalRegex).length === dec.length) return true;
  return false;
}

export function isValidBinary(bin) {
  const binRegex = /0|1/g;
  if (bin.match(binRegex) && bin.match(binRegex).length === bin.length) return true;
  return false;
}
