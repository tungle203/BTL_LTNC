import classNames from 'classnames/bind';

import ProductMenu from '../../Component/ProductMenu';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

function Home({ BeverageList, FoodList }) {
  return (
    <div className={cx('wrapper')}>
      <ProductMenu BeverageList={BeverageList} FoodList={FoodList} />
    </div>
  );
}

export default Home;
