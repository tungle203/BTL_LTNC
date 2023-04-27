import { Product } from '../../Class/Product';
import classNames from 'classnames/bind';
import styles from './Home.module.css';

const cx = classNames.bind(styles);
function Home() {
  const product1 = new Product('Sản phẩm 1', 100000);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('expired')}>
        <h2 className={cx('expired-header')}>Sắp hết hạn: </h2>
        <p>{product1.getName()}</p>
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
