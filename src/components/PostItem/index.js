import styles from './PostItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const PostItem = () => {
    //const { nickname, avatar } = data;
    return (
        <div className={cx('wrapper')}>
            <Link to={`/@vangiaurecca`} className={cx('avatar')}>
                <img src="https://vangiau-cover.vercel.app/img/HoaBangLangRemix.jpg" alt="#" />
            </Link>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <div className={cx('author')}>
                        <Link to={`/@vangiaurecca`}>
                            <h3 className={cx('author-id')}>vangiau.recca</h3>
                            <h4 className={cx('author-nickname')}>Nguyễn Văn Giàu</h4>
                        </Link>
                        <div className={cx('video-desc')}>Welcome to my account</div>
                        <div className={cx('video-music')}>
                            <Link to={`/music`} className={cx('video-music-link')}>
                                <FontAwesomeIcon icon={faMusic} className={cx('video-music-icon')} />
                                nhạc nền - Nguyễn Văn Giàu
                            </Link>
                        </div>
                    </div>
                    <Button outline className={cx('btn-follow')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('video')}>
                    <div className={cx('video-card')}>
                        <video
                            className={cx('video-player')}
                            controls
                            src="https://webapp-va.tiktok.com/8be6e260832bab7b32517ecca406b3ad/628a37bc/kmoat/tos-useast2a-pve-0037-aiso/c665f1fed05143229b8ba5d5c9007e62?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C0%7C0&br=1638&bt=819&cs=0&ds=6&ft=lcWriHk_Myq8Z-I.9we2NXffml7Gb&mime_type=video_mp4&qs=0&rc=NmY2ZzQ7aDs5NDQ8PDMzNkBpanhvODM6Zjw5PDMzZjgzM0BhX2MxMGItX2ExYjMvL2JhYSNqMWBqcjQwYi5gLS1kL2Nzcw%3D%3D&dpk=mQG%2FKqbMAk0ega%2BOWZCd4uheZC889VbNG63Osl3bEb%2F1E3F%2Bp0P%2F1YbbfzXucxoD7Qioz1cSjYwAi4xh8rCps%2FMR6lGnVq%2F1cAUAvQ%3D%3D&dpm=cenc-aes-ctr&l=2022052207162801024524210400CFC08C&policy=eyJ2bSI6MywidWlkIjoiNjU0NDU0NjgwMDM0MTcyOTI4MiJ9"
                        />
                    </div>
                    <div className={cx('video-action')}>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <strong className={cx('text')}>138K</strong>
                        </button>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </span>
                            <strong className={cx('text')}>54</strong>
                        </button>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <strong className={cx('text')}>10</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
