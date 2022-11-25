import PropTypes from "prop-types";
import {ProfileCard, Description, Stats, Info, Avatar, StatsItem} from 'components/Profile/Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <ProfileCard className="profile">
    <Description className="description">
        <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
        />
        <Info className="name">{username}</Info>
        <Info className="tag">@{tag}</Info>
        <Info className="location">{location}</Info>
    </Description>
    <Stats className="stats">
        <StatsItem>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
        </StatsItem>
    </Stats>
</ProfileCard>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};