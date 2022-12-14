import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return <ul>
            {friends.map(friend => {
                return <div key={friend.id}>
                    <FriendListItem 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}/>
                </div>
            })}
    </ul>
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};