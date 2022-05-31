import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MessageIcon, NotifyIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layouts/components/Search';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import routesConfig from '~/config/routes';
import { MENU_ITEMS, USER_MENU } from '~/constants';

const cx = classNames.bind(styles);

const Header = () => {
    const handleChangeMenu = (item) => {
        console.log(item);
    };
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[100, 100]} content="Tải video lên" placement="bottom">
                                <button className={cx('upload-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[100, 100]} content="Tin nhắn" placement="bottom">
                                <button className={cx('message-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[100, 100]} content="Thông báo" placement="bottom">
                                <button className={cx('notify-btn')}>
                                    <NotifyIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://vangiau-cover.vercel.app/img/HoaBangLangRemix.jpg"
                                alt="#"
                            />
                        ) : (
                            <button className={cx('see-more-btn')}>
                                <FontAwesomeIcon className={cx('see-more-icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
