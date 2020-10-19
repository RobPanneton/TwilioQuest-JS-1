const addFirstToLast = (array) => {
  return array[0].concat("", array[array.length - 1]);
};

console.log(addFirstToLast(["golden", "terrier", "goodboi"]));
