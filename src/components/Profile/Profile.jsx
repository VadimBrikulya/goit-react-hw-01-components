import PropTypes from 'prop-types';
import css from './Profile.module.css';

import defaultImage from './Images/default.jpg';

export default function Profile({
    name,
    tag,
    location,
    avatar = defaultImage,
    stats,
}) {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
            alt="Аватар пользователя"
            width ="140"
      className={css.avatar}
    />
    <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
  </div>

            <ul className={css.stats}>
    <li>
      <span className={css.label} >Followers </span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views </span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes </span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
};

Profile.defaultProps = {
  avatar:defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

