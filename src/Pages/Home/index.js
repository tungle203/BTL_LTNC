
import { Product } from '../../Class/Product';
import classNames from 'classnames/bind';
import styles from './Home.module.css';

import { BeverageList } from '../../Class/Product';


const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('expired')}>
        <h2 className={cx('expired-header')}>Sắp hết hạn: </h2>
      </div>

      <div className={cx('overview')}>
        <h2 className={cx('overview-header')}>Thống kê: </h2>
        <p> - Số loại mặt hàng:</p>
        <p> - Số lượng mặt hàng:</p>
      </div>
    </div>
  );
}

export default Home;
