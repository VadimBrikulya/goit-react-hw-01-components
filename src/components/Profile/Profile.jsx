import PropTypes from 'prop-types';
import css from './Profile.module.css'
export default function Profile({
    name,
    tag,
    location,
    avatar,
    stats,
}) {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      className={css.avatar}
    />
    <p className={css.name}>Petra Marica</p>
                <p className={css.tag}>@pmarica</p>
                <p className={css.location}>Salvador, Brasil</p>
  </div>

            <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>1000</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>2000</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>3000</span>
    </li>
  </ul>
</div>
    )
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.node,
  stats: PropTypes.number,
};
