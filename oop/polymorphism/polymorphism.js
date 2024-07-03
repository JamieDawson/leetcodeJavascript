class Shape {
  area() {
    return "basic creation";
  }
}

class Square extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let square = new Square(2, 4);
console.log(square.area());
