import PropTypes from 'prop-types';
// import ProfileCss from './Profile.module.css';
import user from '../user.json';
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg'}
          alt={user.avatar}
          className="avatar"
        />
        <p className="name">{user.name}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">{user.stats}</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">{user.stats.views}</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">{user.stats.likes}</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.node,
  stats: PropTypes.number,
};
