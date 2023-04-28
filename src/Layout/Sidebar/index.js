import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRotate } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
  const actions = [
    { title: 'Trang chủ', to: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: 'Tình trạng', to: '/status', icon: <FontAwesomeIcon icon={faRotate} /> },
  ];
  return (
    <div className={cx('wrapper')} style={{ width: '15vw', minWidth: '140px', backgroundColor: '#1c1d2b' }}>
      <ul className={cx('wrapper-ul')}>
        {actions.map((action, index) => (
          <li key={index}>
            <NavLink to={action.to} className={(nav) => cx('link', { active: nav.isActive })}>
              <span className={cx('icon')}>{action.icon}</span>
              {action.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
