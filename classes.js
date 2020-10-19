class Materializer {
  constructor(arg1) {
    this.target = arg1;
    this.activated = false;
  }

  activate() {
    this.activated = true;
  }

  materialize() {
    return this.activated === true ? this.target : undefined;
  }
}
