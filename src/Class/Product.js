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

  toString() {
    let descript = `Thống kê hàng xóa ${this.name}: ${this.quantity} sản phẩm\n`;
    for (let i = 0; i < this.goods.length; i++) {
      descript += this.goods[i].toString() + '\n';
    }
    return descript;
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

// const coca1 = new Goods(11, 100, new Date('2024-1-1'));
// const coca2 = new Goods(12, 350, new Date('2024-8-1'));
// const coca3 = new Goods(13, 200, new Date('2025-4-1'));

// const coca1 = {id: 12, count: 100, date: }
