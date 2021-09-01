import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistic({
    title,
    stats })

{
    return (
        <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css['stat-list']} >

          {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item} key={id}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
            </li>
            ))}
        </ul>
</section>

    )

}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.number).isRequired,
}