import classNames from 'classnames/bind';
import styles from './ModifyCard.module.css';
import { useState } from 'react';
import { Goods } from '../../Class/Product';

const cx = classNames.bind(styles);

function ModifyCard({ product, classNames, onCancel }) {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    product.add(new Goods(1, count, date));
    setCount(0);
  };
  return (
    <div className={cx('wrapper', classNames)}>
      <h2>{product.getName()}</h2>
      {/* <p>{product.getDes()}</p> */}
      <p>
        <span>Hạn sử dụng</span>
        <span>Số lượng</span>
      </p>
      <ul>
        {product.getGoods().map((item, index) => (
          <li key={index}>
            <span>{item.getExpiryDate()}</span>
            <span>{item.getQuantity()}</span>
          </li>
        ))}
      </ul>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Count..." type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={handleSubmit} className={cx('submit-btn')}>
        Oke
      </button>
      <button onClick={onCancel} className={cx('submit-btn')}>
        Hủy
      </button>
    </div>
  );
}

export default ModifyCard;
