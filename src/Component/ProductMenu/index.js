import { useState } from 'react';
import classNames from 'classnames/bind';

import { productList } from '../../Class/Product';
import ProductCard from './ProductCard';
import ModifyCard from '../ModifyCard';
import styles from './ProductMenu.module.css';

const cx = classNames.bind(styles);

function ProductMenu() {

  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(productList[0]);
  return (
    <div className={cx('wrapper')}>
      <h4>Đồ ăn</h4>
      <div className={cx('list')}>
        {productList.map((product, index) => (
          <li
            key={index}
            onClick={() => {
              setShow(true);
              setCurrentProduct(product);
            }}
          >
            {<ProductCard product={product} />}
          </li>
        ))}
        {<ModifyCard classNames={show ? 'show' : 'hide'} product={currentProduct} />}
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
