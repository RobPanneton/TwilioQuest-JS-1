const scan = (array) => {
  let count = 0;
  array.forEach((string) => {
    string === "contraband" ? count++ : (count = count);
  });

  return count;
};
