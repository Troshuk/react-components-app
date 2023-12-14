import css from './Statistics.module.css';

const Statistics = ({ stats, title = '' }) => {
  return (
    stats?.length > 0 && (
      <section class={css.section}>
        {title?.length > 0 && <h2 class={css.title}>{title}</h2>}

        <ul
          className={css.statList}
          style={{ '--statistic-item-count': Math.min(stats.length, 4) }}
        >
          {stats.map(({ id, label, percentage }) => (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: generateRandomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

function generateRandomColor() {
  const red = Math.floor(Math.random() * 155);
  const green = Math.floor(Math.random() * 155);
  const blue = Math.floor(Math.random() * 155);

  return `rgba(${red}, ${green}, ${blue}, 0.8)`;
}

export { Statistics };
