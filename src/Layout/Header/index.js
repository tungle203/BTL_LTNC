import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <h2>QUẢN LÝ KHO HÀNG</h2>
    </header>
  );
}
export default Header;
