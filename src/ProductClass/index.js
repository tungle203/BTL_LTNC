import { Beverage, Food } from './Product';

const Coca = new Beverage('Coca Cola', 10000, 330, 'Không calo');
const Suprite = new Beverage('Suprite', 10000, 330, 'Nguyên Bản');
const Vinamilk = new Beverage('Vinamilk', 8000, 250, 'Sữa tươi tiệt trùng');
const Huda = new Beverage('Bia Huda', 18000, 330, 'Đậm tình miền Trung');

const Sandwich = new Food('Sandwich', 20000, 100, 'Sale 50%');
const BanhBongLan = new Food('Bánh Bông Lan', 10000, 50, 'Bông lan thơm mềm');
const MyTom = new Food('Mỳ tôm', 100000, 1000, 'Ăn không sợ mụn');
const Oishi = new Food('Oishi', 20000, 100, 'Siêu cay');

const BeverageList = [Coca, Suprite, Vinamilk, Huda];
const FoodList = [Sandwich, BanhBongLan, MyTom, Oishi];

export { BeverageList, FoodList };
