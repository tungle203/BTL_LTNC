import classNames from 'classnames/bind';
import styles from './ProductCard.module.css';

const cx = classNames.bind(styles);

function ProductCard({ product }) {
  return (
    <div className={cx('wrapper')}>
      <h4>{product.name}</h4>
    </div>
  );
}
export default ProductCard;
