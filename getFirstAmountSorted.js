const getFirstAmountSorted = (array, num) => {
  let sortedArray = array.sort();
  let newArray = [];

  for (let i = 0; i < num; i++) {
    newArray.push(sortedArray[i]);
  }
  return newArray;
};

getFirstAmountSorted([3, 2, 9, 52, 1], 3);
