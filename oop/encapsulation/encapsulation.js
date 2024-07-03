class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  showNames() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  setNames(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
}

let person = new Person("jamie", "dawson");
console.log(person.showNames());
person.setNames("Jane", "Doe");
console.log(person.showNames());
console.log(person.#firstName);
