class Ducktypium {
  constructor(string) {
    if (string === "red" || string === "blue" || string === "yellow") {
      this.color = string;
    } else {
      alert("invalid input");
      return;
    }
    this.calibrationSequence = [];
  }

  refract = (color2) => {
    const secondColor = color2;
    if (
      (this.color === "red" && color2 === "blue") ||
      (this.color === "blue" && color2 === "red")
    ) {
      return "purple";
    } else if (
      (this.color === "red" && color2 === "yellow") ||
      (this.color === "yellow" && color2 === "red")
    ) {
      return "orange";
    } else if (
      (this.color === "yellow" && color2 === "blue") ||
      (this.color === "blue" && color2 === "yellow")
    ) {
      return "green";
    } else if (this.color === secondColor) {
      return this.color;
    } else {
      alert("invalid input");
    }
  };

  calibrate = (array) => {
    let sortedArray = array.sort();

    sortedArray = sortedArray.map((number) => {
      return number * 3;
    });
    this.calibrationSequence = sortedArray;
  };
}

const dt = new Ducktypium("blue");

console.log(dt.color); // prints 'red'

console.log(dt.refract("red")); // prints 'purple'
console.log(dt.refract("blue")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
