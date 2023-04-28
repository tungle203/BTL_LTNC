import { Beverage, Food } from './Product';

const Coca = new Beverage('Coca Cola', 10000, 330, 'Nguyên Bản');
const Pepsi = new Beverage('Pepsi', 10000, 330, 'Nguyên Bản');
const Vinamilk = new Beverage('Vinamilk', 8000, 250, 'Sữa tươi tiệt trùng');
const Huda = new Beverage('Bia Huda', 18000, 330, 'Đậm tình miền Trung');

const BanhPia = new Food('Bánh Pía', 20000, 100, 500);
const BanhBongLan = new Food('Bánh Bông Lan', 10000, 50, 100);
const CaTuoi = new Food('Cá Tươi', 100000, 1000, 1000);
const ChanGa = new Food('Chân gà', 20000, 100, 400);

const BeverageList = [Coca, Pepsi, Vinamilk, Huda];
const FoodList = [BanhPia, BanhBongLan, CaTuoi, ChanGa];

export { BeverageList, FoodList };
