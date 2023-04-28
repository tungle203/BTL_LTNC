export class Goods {
  constructor(id, count = 0, date) {
    this.id = id;
    this.count = count;
    this.date = date;
  }

  getId() {
    return this.id;
  }

  getCount() {
    return this.count;
  }

  getDate() {
    return this.date;
  }

  remove(numOfProduct) {
    this.count -= numOfProduct;
  }

  toString() {
    return `ID: ${this.id}, Quantity: ${this.count}, Expiry Date: ${this.date}`;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.count = 0;
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

  getCount() {
    return this.count;
  }
  getPrice() {
    return this.price;
  }
  getGoods() {
    return this.goods;
  }

  store() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this.goods));
  }
  add(goods) {
    this.goods.push(goods);
    this.count += goods.getCount();
    this.sort();
    this.store();
  }

  setGoods(goods = []) {
    goods &&
      goods.forEach((good) => {
        const { id, count, date } = good;
        this.add(new Goods(id, count, date));
      });
  }
  // Tính khoảng cách giữa ngày hiện tại và ngày của đối tượng Goods
  getDaysDiff(date) {
    const today = new Date();
    const diffTime = Math.abs(date - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  // Sắp xếp mảng goods theo khoảng cách từ bé đến lớn
  sort() {
    this.goods.sort((a, b) => {
      const diffA = this.getDaysDiff(new Date(a.getDate()));
      const diffB = this.getDaysDiff(new Date(b.getDate()));
      return diffA - diffB;
    });
  }

  remove(expiredItem) {
    for (let i = 0; i < this.goods.length; i++) {
      if (this.goods[i] === expiredItem) this.goods.splice(i, 1);
      this.count -= expiredItem.getCount();
    }
    this.store();
  }

  almostExpired() {
    const almostExpiredList = [];
    this.goods.forEach((item) => {
      if (this.getDaysDiff(item.getDate() < 31)) almostExpiredList.push(item);
    });
    return almostExpiredList;
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
const Suprite = new Beverage('Suprite', 10000, 330, 'Nguyên Bản');
const Vinamilk = new Beverage('Vinamilk', 8000, 250, 'Sữa tươi tiệt trùng');
const Huda = new Beverage('Bia Huda', 18000, 330, 'Đậm tình miền Trung');

const Sandwich = new Food('Sandwich', 20000, 100, 500);
const BanhBongLan = new Food('Bánh Bông Lan', 10000, 50, 100);
const MyTom = new Food('Mỳ tôm', 100000, 1000, 1000);
const Oishi = new Food('Oishi', 20000, 100, 400);

export const BeverageList = [Coca, Suprite, Vinamilk, Huda];
export const FoodList = [Sandwich, BanhBongLan, MyTom, Oishi];
