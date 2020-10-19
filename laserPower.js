const calculatePower = (array) => {
  let newArray = array.map((number) => {
    return number * 2;
  });

  let powerSetting = 0;

  powerSetting = newArray.reduce((a, b) => a + b, 0);

  return powerSetting;
};

const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // should be 24
