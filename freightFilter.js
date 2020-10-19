const scanAndFilter = (array, string) => {
  return array.filter((word) => word !== string);
};

const cargo = ["apples", "ray guns", "oranges", "tacos", "ray guns"];

const filteredCargo = scanAndFilter(cargo, "ray guns");

console.log(filteredCargo);
