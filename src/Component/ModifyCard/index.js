import classNames from 'classnames/bind';
import styles from './ModifyCard.module.css';

const cx = classNames.bind(styles);

function ModifyCard({ product, classNames }) {
  return (
    <div className={cx('wrapper', classNames)}>
      <h2>{product.getName()}</h2>
    </div>
  );
}

export default ModifyCard;
