import PropTypes from "prop-types";
import {FriendCard, Offline, Online} from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <FriendCard className="item">

        {isOnline ? <Online></Online> : <Offline></Offline>}

    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
</FriendCard>
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};