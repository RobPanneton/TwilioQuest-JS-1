const argumentValue = process.argv[2];

const input = Number(argumentValue);

switch (input) {
  case 0:
    console.log("alive");
    return;
  case 1:
    console.log("flowering");
    return;
  case 2:
    console.log("shedding");
    return;
  default:
    console.log("other");
}
