//JS classes
class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getSauce() {
    return this.#sauce;
  }
  hereYouGo() {
    console.log(`Here's your ${this.#size} ${this.#sauce} ${this.crust} crust pizza`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getSauce());
