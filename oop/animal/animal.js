class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }

  recievesDamage() {
    this.health = this.health - 10;
    console.log(this.health);
  }

  showWeapon() {
    console.log(this.weapon);
  }
}

class Wizard extends Human {
  constructor(weapon) {
    super(weapon);
  }

  recievesDamage() {
    this.health = this.health - 11;
    console.log(this.health);
  }
}

let human = new Human("sword");
let wizard = new Wizard("staff");

wizard.showWeapon();
