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

const product1 = new Product('Sản phẩm 1', 100000);
const product2 = new Product('Sản phẩm 2', 100000);
const product3 = new Product('Sản phẩm 3', 100000);
const product4 = new Product('Sản phẩm 4', 100000);
export const productList = [product1, product2, product3, product4];
