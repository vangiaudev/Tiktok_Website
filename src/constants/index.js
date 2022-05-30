import { faArrowRightFromBracket, faChartLine, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CoinIcon, LanguageIcon, QuestionIcon, SettingIcon, UserIcon } from '~/components/Icons';

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
const USER_MENU = [
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

export { MENU_ITEMS, USER_MENU };
