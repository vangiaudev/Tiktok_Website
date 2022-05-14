import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Image = forwardRef(({ src, className, alt, fallback: defaultImage = images.noImage }, ref) => {
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
            onError={handleImageError}
        />
    );
});

export default Image;
