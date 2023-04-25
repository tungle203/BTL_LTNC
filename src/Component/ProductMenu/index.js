import classNames from 'classnames/bind';
import styles from './ProductMenu.module.css';

import { Product } from '../../Class/Product';
import ProductCard from '../ProductCard';

const cx = classNames.bind(styles);

function ProductMenu() {
  const product1 = new Product('Sản phẩm 1', 100000);
  const product2 = new Product('Sản phẩm 2', 100000);
  const product3 = new Product('Sản phẩm 3', 100000);
  const product4 = new Product('Sản phẩm 4', 100000);
  const productList = [product1, product2, product3, product4];
  return (
    <div className={cx('wrapper')}>
      <h4>Đồ ăn</h4>
      <div className={cx('list')}>
        {productList.map((product, index) => (
          <li key={index}>{<ProductCard product={product} />}</li>
        ))}
      </div>
    </div>
  );
}

export default ProductMenu;
