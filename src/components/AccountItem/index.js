import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('avatar')}>
                <img alt="#" src="https://vangiau-cover.vercel.app/img/HoaBangLangRemix.jpg" />
            </span>
            <div className={cx('info-user')}>
                <h4>
                    vangiau.recca
                    <FontAwesomeIcon className={cx('blue-tick')} icon={faCheckCircle} />
                </h4>
                <p>Văn Giàu</p>
            </div>
        </div>
    );
};

export default AccountItem;
