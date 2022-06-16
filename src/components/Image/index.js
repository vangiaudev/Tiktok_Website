import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Image = forwardRef(({ src, className, alt, fallback: defaultImage = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleImageError = () => {
        setFallback(defaultImage);
    };
    return (
        <img
            className={cx(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleImageError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    ref: PropTypes.string,
};

export default Image;
