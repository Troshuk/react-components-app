import css from './Profile.module.css';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.image} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.statTitle}>Followers</span>
          <span className={css.statNumber}>{followers.toLocaleString()}</span>
        </li>
        <li>
          <span className={css.statTitle}>Views</span>
          <span className={css.statNumber}>{views.toLocaleString()}</span>
        </li>
        <li>
          <span className={css.statTitle}>Likes</span>
          <span className={css.statNumber}>{likes.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
};

export { Profile };
