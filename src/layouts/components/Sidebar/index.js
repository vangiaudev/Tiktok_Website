import classNames from 'classnames/bind';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    UserGroupIcon,
    HomeIcon,
    LiveIcon,
    UserGroupActiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang theo dõi"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
};

export default Sidebar;
