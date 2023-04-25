import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
  const actions = [
    { title: 'Trang chủ', to: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: 'Thêm', to: '/add', icon: <FontAwesomeIcon icon={faPlus} /> },
    { title: 'Tình trạng', to: '/status', icon: <FontAwesomeIcon icon={faRotate} /> },
  ];
  return (
    <aside className={cx('wrapper')}>
      <ul className={cx('wrapper-ul')}>
        {actions.map((action, index) => (
          <li key={index}>
            <NavLink to={action.to} className={cx('link')}>
              <span className={cx('icon')}>{action.icon}</span>
              {action.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default Sidebar;
