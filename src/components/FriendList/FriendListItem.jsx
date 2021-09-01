import PropTypes from 'prop-types';
import css from '../FriendList/FriendListItem.module.css';
export default function FriendList({avatar, name, isOnline,}) {
    
    return (
        <li className={css.item}>
                    <span className={isOnline ? css.online : css.offline}></span>
                    <img className={css.avatar} src={avatar} alt={name} width="60" />
                    <p className={css.name}>{name}</p>
                </li>
    
    )
};

FriendList.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
}