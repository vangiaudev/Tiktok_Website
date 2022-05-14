import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const Menu = ({ children, items, onChange = () => {} }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderMenuItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.details;
            const handleClickMenuItem = () => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.details]);
                } else {
                    onChange(item);
                }
            };
            return <MenuItem key={index} data={item} onClick={handleClickMenuItem}></MenuItem>;
        });
    };
    const handleBackMenu = () => {
        setHistory((prev) => [...prev].splice(0, history.length - 1));
    };
    const handleHideMenu = () => {
        setHistory((prev) => [...prev].splice(0, 1));
    };
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            onHide={handleHideMenu}
            offset={[12, 8]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header onBack={handleBackMenu} title="Ngôn ngữ" />}
                        {renderMenuItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
