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
        <div key={index} className={cx('expire-item')}>
          <p className={cx('expire-name')}>{item.getName()}</p>
          <ul>
            {almostExpiredList.map((expiredItem, index) => (
              <li key={index} className={cx('date-quantity-remove')}>
                <p className={cx('date-quantity')}>Date: {expiredItem.getDate()}</p>
                <p className={cx('date-quantity')}>SL: {expiredItem.getCount()}</p>
                <button onClick={() => handleDelete(item, expiredItem)} className={cx('remove-btn')}>
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <></>;
  };
  const renderList = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.getName()}</td>
        <td>{item.getCount()}</td>
        <td>{item.getPrice()}</td>
        <td>{item.getDes()}</td>
      </tr>
    );
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('expired-wrapper')}>
        <h2 className={cx('expired-header')}>Sắp hết hạn: </h2>
        {BeverageList.map((item, index) => renderAlmostExpired(item, index))}
        {FoodList.map((item, index) => renderAlmostExpired(item, index))}
      </div>

      <div className={cx('overview-wrapper')}>
        <h2 className={cx('overview-header')}>Thống kê: </h2>
        <p> - Số loại mặt hàng: {BeverageList.length + FoodList.length}</p>
        <p> - Thông tin:</p>

        <table className={cx('status')}>
          <thead>
            <tr className={cx('table-head')}>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {BeverageList.map((item, index) => renderList(item, index))}
            {FoodList.map((item, index) => renderList(item, index))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Status;
