const scan = (array) => {
  let outputArray = [];

  for (let i = 0; i < array.length; i++) {
    array[i] === "contraband"
      ? outputArray.push(i)
      : (outputArray = outputArray);
  }
  return outputArray;
};
