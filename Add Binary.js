/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[a.length - i - 1] * Math.pow(2, i);
  }
  for (let i = 0; i < b.length; i++) {
    sum += b[b.length - i - 1] * Math.pow(2, i);
  }

  let binary = "";
  while (sum > 0) {
    binary = (sum % 2) + binary;
    console.log("binary", binary);
    sum = Math.floor(sum / 2);
  }
  return binary;
};
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
