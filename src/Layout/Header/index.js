import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <h2>Cửa hàng tiện lợi</h2>
    </header>
  );
}
export default Header;
