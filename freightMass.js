const calculateMass = (array) => {
  let totalMass = 0;
  let lengthArray = [];
  array.forEach((word) => {
    lengthArray.push(word.length);
  });

  console.log(lengthArray);
  totalMass = lengthArray.reduce((a, b) => a + b, 0);
  return totalMass;
};

const cargo = ["cat", "dog", "bird"];

const mass = calculateMass(cargo);

console.log(mass);
