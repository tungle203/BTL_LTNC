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
    console.log(typeof count);
    setCount(0);
  };
  return (
    <div className={cx('wrapper', classNames)}>
      <div className={cx('product-info')}>
        <h2 className={cx('product-name')}>{product.getName()}</h2>
        <div className={cx('detail')}>
          <label className={cx('label')}>Giá:</label>
          <p>{product.getPrice()}</p>
        </div>
        <div className={cx('detail')}>
          <label className={cx('label')}>Tổng số lượng:</label>
          <p>{product.getCount()}</p>
        </div>
      </div>

      <table className={cx('status')}>
        <thead>
          <tr>
            <td>Hạn sử dụng</td>
            <td>Số lượng</td>
          </tr>
        </thead>
        <tbody>
          {product.getGoods().map((item, index) => (
            <tr key={index}>
              <td>{item.getDate()}</td>
              <td>{item.getCount()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={cx('line')}></div>

      <div className={cx('add')}>
        <div className={cx('form')}>
          <div className={cx('form-row')}>
            <label className={cx('label')}>Hạn sử dụng</label>
            <input className={cx('input')} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div className={cx('form-row')}>
            <label className={cx('label')}>Số lượng</label>
            <input
              className={cx('input')}
              placeholder="Count..."
              type="number"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
        </div>

        <button onClick={handleSubmit} className={cx('add-btn')}>
          Thêm
        </button>
      </div>

      <div className={cx('line')}></div>

      <button onClick={onCancel} className={cx('submit-btn')}>
        Oke
      </button>
    </div>
  );
}

export default ModifyCard;
