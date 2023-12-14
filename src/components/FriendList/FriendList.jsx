import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    friends.length > 0 && (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    )
  );
};

export { FriendList };
