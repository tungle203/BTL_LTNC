class Goods {
  constructor(id, quantity, expiryDate) {
    this.id = id;
    this.quantity = quantity;
    this.expiryDate = expiryDate;
  }

  getId() {
    return this.id;
  }

  getQuantity() {
    return this.quantity;
  }

  getExpiryDate() {
    return this.expiryDate;
  }

  remove(numOfProduct) {
    this.quantity -= numOfProduct;
  }

  toString() {
    return `ID: ${this.id}, Quantity: ${
      this.quantity
    }, Expiry Date: ${this.expiryDate.getFullYear()}/${this.expiryDate.getMonth()}/${this.expiryDate.getDay()}`;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.quantity = 0;
    this.goods = [];
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

  getDaysDiff(expiryDate) {
    const today = new Date();
    const diffTime = Math.abs(expiryDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  sort() {
    this.goods.sort((a, b) => {
      const diffA = this.getDaysDiff(new Date(a.getExpiryDate()));
      const diffB = this.getDaysDiff(new Date(b.getExpiryDate()));
      return diffA - diffB;
    });
  }

  add(goods) {
    this.goods.push(goods);
    this.quantity += goods.getQuantity();
    this.sort();
  }

  remove(id, numOfProduct) {
    for (let i = 0; i < this.goods.length; i++) {
      if (id == this.goods[i].id) {
        this.goods[i].remove(numOfProduct);
        break;
      }
    }
    this.quantity -= numOfProduct;
  }

  // getAlmostExpired() {
  //   let almostExpired = `Danh sách hàng hóa gần hết hạn (hạn sử dụng còn lại ít hơn 31 ngày):\n`;
  //   for (let i = 0; i < this.goods.length; i++) {
  //     if (this.getDaysDiff(this.goods[i].getExpiryDate()) < 31) {
  //       almostExpired += this.goods[i].toString() + '\n';
  //     } else {
  //       break;
  //     }
  //   }
  //   return almostExpired;
  // }

  almostExpired() {
    let index = 0;
    while (this.getDaysDiff(this.goods[i].getExpiryDate() < 31)) {
      index++;
    }
    index--;
    if (index >= 0) {
      return this.goods.slice(0, index);
    }
  }

  toString() {
    let description = `Thống kê hàng xóa ${this.name}: ${this.quantity} sản phẩm\n`;
    for (let i = 0; i < this.goods.length; i++) {
      description += this.goods[i].toString() + '\n';
    }
    return description;
  }
}

class Beverage extends Product {
  constructor(name, price, volume, flavor) {
    super(name, price);
    this.volume = volume;
    this.flavor = flavor;
  }

  setVolume(volume) {
    this.volume = volume;
  }

  setFlavor(flavor) {
    this.flavor = flavor;
  }

  getVolume() {
    return this.volume;
  }

  getFlavor() {
    return this.flavor;
  }
}

class Food extends Product {
  constructor(name, price, weight, calories) {
    super(name, price);
    this.weight = weight;
    this.calories = calories;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  setCalories(calories) {
    this.calories = calories;
  }

  getWeight() {
    return this.weight;
  }

  getCalories() {
    return this.calories;
  }
}

const Coca = new Beverage('Coca Cola', 10000, 330, 'Nguyên Bản');
const coca1 = new Goods(11, 100, new Date('2024-1-1'));
const coca2 = new Goods(12, 350, new Date('2024-8-1'));
const coca3 = new Goods(13, 200, new Date('2023-5-1'));

Coca.add(coca2);
Coca.add(coca3);
Coca.add(coca1);
Coca.remove(12, 75);
console.log(Coca.toString());
console.log(Coca.getAlmostExpired());
