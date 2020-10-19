class TargetingSolution {
  constructor(object) {
    this.x = object.x;
    this.y = object.y;
    this.z = object.z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}

const m = new TargetingSolution({ x: 10, y: 15, z: 900 });

console.log(m.target());
