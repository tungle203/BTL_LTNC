import { useState } from 'react';
import classNames from 'classnames/bind';

import ProductCard from './ProductCard';
import ModifyCard from '../ModifyCard';
import styles from './ProductMenu.module.css';

const cx = classNames.bind(styles);

function ProductMenu({ BeverageList, FoodList }) {
  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(BeverageList[0]);

  const handleSubmit = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };
  return (
    <div className={cx('wrapper')}>
      <h4>Thức uống</h4>
      <div className={cx('list')}>
        {BeverageList.map((product, index) => (
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
        {
          <ModifyCard
            classNames={show ? 'show' : 'hide'}
            product={currentProduct}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        }
      </div>

      <h4>Đồ ăn</h4>
      <div className={cx('list')}>
        {FoodList.map((product, index) => (
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
      </div>
    </div>
  );
}

export default ProductMenu;
