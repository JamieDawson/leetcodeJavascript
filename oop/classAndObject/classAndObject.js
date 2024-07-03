class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  showCars() {
    console.log(this.make + " " + this.model + " " + this.year);
  }
}

let car1 = new Car("Regular", "Toyota", 1991);

car1.showCars();
