import classNames from 'classnames/bind';

import ProductMenu from '../../Component/ProductMenu';
import styles from './Add.module.css';

const cx = classNames.bind(styles);

function Add() {
  return (
    <div className={cx('wrapper')}>
      <ProductMenu />
    </div>
  );
}

export default Add;
