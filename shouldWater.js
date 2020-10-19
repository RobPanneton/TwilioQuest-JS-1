// const argumentValue = process.argv[2];
// const argumentValue2 = process.argv[3];

// let plantLife = Number(argumentValue);
// let dryness = Number(argumentValue2);

// console.log(plantLife);

// if (plantLife === 0 && dryness > 10) {
//   console.log("WATER");
// }

const argumentValue = process.argv[2];
const argumentValue2 = process.argv[3];

const treeAlive = Number(argumentValue);
const treeDry = Number(argumentValue2);

if (treeAlive === 0 && treeDry > 10) console.log("WATER");
