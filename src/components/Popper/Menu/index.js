import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const Menu = ({ children, items, onChange = () => {}, hideOnClick = false }) => {
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
    const handleBack = () => {
        setHistory((prev) => [...prev].splice(0, history.length - 1));
    };
    const handleHide = () => {
        setHistory((prev) => [...prev].splice(0, 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header onBack={handleBack} title={currentMenu.title} />}
                <div className={cx('menu-body')}>{renderMenuItems()}</div>
            </PopperWrapper>
        </div>
    );
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            onHide={handleHide}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            render={(attrs) => renderResult()}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};
export default Menu;
