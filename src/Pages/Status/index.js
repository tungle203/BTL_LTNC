import classNames from 'classnames/bind';
import styles from './Status.module.css';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Status({ BeverageList, FoodList }) {
  const [reRender, setReRender] = useState(false);
  const handleDelete = (item, expiredItem) => {
    item.remove(expiredItem);
    setReRender(!reRender);
  };
  const renderAlmostExpired = (item, index) => {
    const almostExpiredList = item.almostExpired();
    if (almostExpiredList.length > 0) {
      return (
        <div key={index}>
          <p>{item.getName()}</p>
          <ul>
            {almostExpiredList.map((expiredItem, index) => (
              <li key={index}>
                {expiredItem.getDate()}
                {expiredItem.getCount()}
                <button onClick={() => handleDelete(item, expiredItem)}>Xóa</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <></>;
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('expired')}>
        <h2 className={cx('expired-header')}>Sắp hết hạn: </h2>
        {BeverageList.map((item, index) => renderAlmostExpired(item, index))}
        {FoodList.map((item, index) => renderAlmostExpired(item, index))}
      </div>

      <div className={cx('overview')}>
        <h2 className={cx('overview-header')}>Thống kê: </h2>
        <p> - Số loại mặt hàng: {BeverageList.length + FoodList.length}</p>
        <p> - Số lượng mặt hàng:</p>
        {BeverageList.map((item, index) => (
          <li key={index}>
            {item.getName()}: {item.getCount()}
          </li>
        ))}
        {FoodList.map((item, index) => (
          <li key={index}>
            {item.getName()}: {item.getCount()}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Status;
