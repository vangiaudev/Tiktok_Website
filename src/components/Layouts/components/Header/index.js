import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faSpinner,
    faChartLine,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
    UploadIcon,
    MessageIcon,
    NotifyIcon,
    SearchIcon,
    CoinIcon,
    LanguageIcon,
    UserIcon,
    QuestionIcon,
    SettingIcon,
} from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        details: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt',
    },
];
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const handleChangeMenu = (item) => {
        console.log(item);
    };
    const currentUser = true;
    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/@user-id',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'Xem phân tích',
            to: '/analytics',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <TippyHeadless
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-label')}>Tài khoản</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <div className={cx('icon-wrapper')}>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </div>

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tải video lên" placement="bottom">
                                <button className={cx('upload-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <button className={cx('message-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Thông báo" placement="bottom">
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
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://vangiau-covr.vercel.app/img/HoaBangLangRemix.jpg"
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
