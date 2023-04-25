import classNames from 'classnames/bind';
import styles from './ModifyCard.module.css';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ModifyCard({ product, classNames, onCancel, onSubmit }) {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState();
  return (
    <div className={cx('wrapper', classNames)}>
      <h2>{product.getName()}</h2>

      <input placeholder="Date..." type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Count..." type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={onCancel} className={cx('submit-btn')}>
        Oke
      </button>
      <button onClick={onSubmit} className={cx('submit-btn')}>
        Hủy
      </button>
    </div>
  );
}

export default ModifyCard;
