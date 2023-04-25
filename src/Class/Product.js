export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

export class Drinks extends Product {}
export class Foods extends Product {}
