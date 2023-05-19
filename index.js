//create CAR class with make, model year
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
//create ElectricCar subclass with same params + range
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return this.make + " " + this.model + " " + this.year + " " + this.range;
  }
}
const myCar = new ElectricCar("Tesla", "Model S", "2019", "300");
console.log(myCar.getDescription());
