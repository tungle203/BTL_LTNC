export class Goods {

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
    return `ID: ${this.id}, Quantity: ${this.quantity}, Expiry Date: ${this.expiryDate}`;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.quantity = 0;
    this.goods = [];
    this.description = '';

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
  getGoods() {
    return this.goods;
  }
  getDes() {
    return this.description;
  }
  // Tính khoảng cách giữa ngày hiện tại và ngày của đối tượng Goods
  getDaysDiff(expiryDate) {
    const today = new Date();
    const diffTime = Math.abs(expiryDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  // Sắp xếp mảng goods theo khoảng cách từ bé đến lớn
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
const Pepsi = new Beverage('Pepsi', 10000, 330, 'Nguyên Bản');
const Vinamilk = new Beverage('Vinamilk', 8000, 250, 'Sữa tươi tiệt trùng');
const Huda = new Beverage('Bia Huda', 18000, 330, 'Đậm tình miền Trung');

export const BeverageList = [Coca, Pepsi, Vinamilk, Huda];