export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  toString() {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.quantity = 0;
    this.expiryDate = [];
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

  add(numOfProduct, expiryDate) {
    for (let i = 0; i < numOfProduct; i++) {
      this.expiryDate.push(expiryDate);
    }
    this.quantity += numOfProduct;
  }

  remove(numOfProduct) {
    if (this.quantity === 0) {
      console.log('Không có sản phẩm để xóa');
      return;
    }

    for (let i = 0; i < numOfProduct; i++) {
      if (this.expiryDate.length === 0) {
        break;
      }
      this.expiryDate.splice(0, 1);
    }
    this.quantity -= removedProducts;
  }

  getDesription() {
    let description = `Tên sản phẩm: ${this.name}\nGiá sản phẩm: ${this.price} đồng\nSố lượng sản phẩm: ${this.quantity}\nNgày hết hạn:\n`;
    if (this.expiryDate.length === 0) {
      description += 'Không có thông tin ngày hết hạn\n';
    } else {
      for (let i = 0; i < this.expiryDate.length; i++) {
        description += `- ${i + 1}. ${this.expiryDate[i].toString()}\n`;
      }
    }
    return description;
  }
}

export class Beverage extends Product {
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

  getDesription() {
    let description = `Tên sản phẩm: ${this.name}\nGiá sản phẩm: ${this.price} đồng\nSố lượng sản phẩm: ${this.quantity}\nThể tích: ${this.volume}ml\nHương vị: ${this.flavor}\nNgày hết hạn:\n`;
    if (this.expiryDate.length === 0) {
      description += 'Không có thông tin ngày hết hạn\n';
    } else {
      for (let i = 0; i < this.expiryDate.length; i++) {
        description += `- ${i + 1}. ${this.expiryDate[i].toString()}\n`;
      }
    }
    return description;
  }
}

export class Food extends Product {
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

  getDesription() {
    let description = `Tên sản phẩm: ${this.name}\nGiá sản phẩm: ${this.price} đồng\nSố lượng sản phẩm: ${this.quantity}\nKhối lượng: ${this.volume}g\nCalories: ${this.flavor}\nNgày hết hạn:\n`;
    if (this.expiryDate.length === 0) {
      description += 'Không có thông tin ngày hết hạn\n';
    } else {
      for (let i = 0; i < this.expiryDate.length; i++) {
        description += `- ${i + 1}. ${this.expiryDate[i].toString()}\n`;
      }
    }
    return description;
  }
}

const CocaCola = new Beverage('Coca Cola', 10000, 330, 'Nguyên Bản');
CocaCola.add(100, new Date(1, 1, 2024));
CocaCola.add(350, new Date(1, 10, 2024));
CocaCola.add(200, new Date(1, 4, 2025));
CocaCola.remove(50);
CocaCola.getDesription();

// const Pepsi = new Beverage('Pepsi', 9000, 300, 'Không calo');
// const Mirinda = new Beverage('Mirinda', 7000, 250, 'Vị cam');
