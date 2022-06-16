import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    onClick,
    leftIcon,
    rightIcon,
    ...more
}) => {
    const props = {
        onClick,
        ...more,
    };
    let CustomButton = 'button';
    if (to) {
        props.to = to;
        CustomButton = Link;
    } else if (href) {
        props.href = href;
        CustomButton = 'a';
    }
    const classes = cx('wrapper', { [className]: className, primary, outline, small, large, text, disabled, rounded });
    return (
        <CustomButton className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </CustomButton>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default Button;
