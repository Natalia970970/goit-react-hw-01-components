import PropTypes from "prop-types";
import {StatListItem, StatList, StatTitle} from './Statistics.styled'

export const Statistics = ({stats, title}) => {
    return <section className="statistics">
    {title && <StatTitle>{title}</StatTitle>}
    <StatList>
        {stats.map(({id, label, percentage}) => {
            return <StatListItem key = {id}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </StatListItem>
        })}
    </StatList>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};