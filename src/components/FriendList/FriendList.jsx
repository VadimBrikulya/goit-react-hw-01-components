import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendList({ friends })
{ return (
    <ul className={css['friend-list']}>
        
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
        
    ))}
    </ul>
    )
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};