class ParkingSystem {
  constructor(big, medium, small) {
    this.slots = {
      1: big,
      2: medium,
      3: small,
    };
  }

  addCar(carType) {
    if (this.slots[carType] === 0) {
      return false;
    }

    this.slots[carType]--;
    return true;
  }
}

/*

create an object and set the 1,2,and 3 to big, med, and small

addCar method:

    if the objects value is zero 
        ==> RETURN FALSE

    Reduce object size by 1

    return true

*/
