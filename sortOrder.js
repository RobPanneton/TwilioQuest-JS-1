const firstValue = process.argv[2];
const secondValue = process.argv[3];

firstUpper = firstValue.toUpperCase();
secondUpper = secondValue.toUpperCase();

if (firstUpper < secondUpper) {
  console.log("-1");
} else if (firstUpper === secondUpper) {
  console.log("0");
} else if (firstUpper > secondUpper) {
  console.log("1");
}
