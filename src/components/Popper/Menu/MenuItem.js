import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button onClick={onClick} className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
};

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
