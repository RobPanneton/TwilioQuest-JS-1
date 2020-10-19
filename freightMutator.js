const mutate = (array) => {
  return array.map((word) => {
    return word.toUpperCase();
  });
};

const cargo = ["apples", "ray guns", "oranges"];

const mutatedCargo = mutate(cargo);

console.log(mutatedCargo);
