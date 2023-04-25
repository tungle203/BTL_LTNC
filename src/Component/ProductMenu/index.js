import classNames from 'classnames/bind';
import styles from './ProductMenu.module.css';

import { Product } from '../../Class/Product';
import ProductCard from '../ProductCard';

const cx = classNames.bind(styles);

function ProductMenu() {
  const product1 = new Product('Mỳ tôm', 100000);
  const product2 = new Product('Sandwich', 100000);
  const product3 = new Product('Kẹo', 100000);
  const product4 = new Product('Bánh ngọt', 100000);
  const product5 = new Product('Oishi', 100000);
  const productList = [product1, product2, product3, product4, product5];
  return (
    <div className={cx('wrapper')}>
      <h4>Đồ ăn</h4>
      <div className={cx('list')}>
        {productList.map((product, index) => (
          <li key={index}>{<ProductCard product={product} />}</li>
        ))}
      </div>

      <h4>Thức uống</h4>
      <div className={cx('list')}>
        {productList.map((product, index) => (
          <li key={index}>{<ProductCard product={product} />}</li>
        ))}
      </div>
    </div>
  );
}

export default ProductMenu;
