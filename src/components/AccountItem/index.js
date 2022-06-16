import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
const AccountItem = ({ data }) => {
    const { avatar, nickname, fullname, tick } = data;
    return (
        <Link to={`/@${nickname}`} className={cx('wrapper')}>
            <span className={cx('avatar')}>
                <Image alt="#" src={avatar} />
            </span>
            <div className={cx('info-user')}>
                <h4>
                    {nickname}
                    {tick && <FontAwesomeIcon className={cx('blue-tick')} icon={faCheckCircle} />}
                </h4>
                <p>{fullname}</p>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    // value: PropTypes.string
    data: PropTypes.object.isRequired,
};
export default AccountItem;
