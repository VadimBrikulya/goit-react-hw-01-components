// import PropTypes from 'prop-types';

export default function FriendList({
    avatar,
    name,
    isOnline }) {
    
    return (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
        </li>

    )
};