//create HOME class with rooms,baths, sf
class Home {
  constructor(rooms, bathrooms, squareFeet) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.squareFeet = squareFeet;
  }

  getInfo() {
    return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
  }
}
//create SINGLE FAM subclass with same params + yard
class SingleFamilyHome extends Home {
  constructor(rooms, bathrooms, squareFeet, yardSize) {
    super(rooms, bathrooms, squareFeet);
    this.yardSize = yardSize;
  }

  getInfo() {
    return `${super.getInfo()} It has a ${this.yardSize} square foot yard.`;
  }
}
//create apt subclass with same params plus floor
class Apartment extends Home {
  constructor(rooms, bathrooms, squareFeet, floor) {
    super(rooms, bathrooms, squareFeet);
    this.floor = floor;
  }

  getInfo() {
    return `${super.getInfo()} It is on floor ${this.floor}.`;
  }
}
