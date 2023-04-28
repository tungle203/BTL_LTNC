class Goods {
  constructor(count, date) {
    this.count = count;
    this.date = date;
  }
  getCount() {
    return this.count;
  }
  addCount(num) {
    this.count += num;
  }
  getDate() {
    return this.date;
  }

  remove(numOfProduct) {
    this.count -= numOfProduct;
  }
}

class Product {
  constructor(name, price, des) {
    this.name = name;
    this.price = price;
    this.count = 0;
    this.des = des;
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
  getDes() {
    return this.des;
  }
  store() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this.goods));
  }
  add({ count, date }) {
    let hasDate = false;
    this.goods.forEach((item) => {
      if (item.getDate() === date) {
        item.addCount(count);
        hasDate = true;
      }
    });
    if (!hasDate) {
      this.goods.push(new Goods(count, date));
    }
    this.count += count;
    this.sort();
    this.store();
  }

  setGoods(goods = []) {
    goods &&
      goods.forEach((good) => {
        const { count, date } = good;
        this.add(new Goods(count, date));
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
      if (this.goods[i] === expiredItem) {
        this.goods.splice(i, 1);
        this.count -= expiredItem.getCount();
      }
    }
    this.store();
  }

  almostExpired() {
    const almostExpiredList = [];
    this.goods.forEach((item) => {
      if (this.getDaysDiff(new Date(item.getDate())) < 10) almostExpiredList.push(item);
    });
    return almostExpiredList;
  }
}

export class Beverage extends Product {
  constructor(name, price, volume, des) {
    super(name, price, des);
    this.volume = volume;
  }
  setVolume(volume) {
    this.volume = volume;
  }
  getVolume() {
    return this.volume;
  }
}

export class Food extends Product {
  constructor(name, price, weight, des) {
    super(name, price, des);
    this.weight = weight;
  }
  setWeight(weight) {
    this.weight = weight;
  }
  getWeight() {
    return this.weight;
  }
}
