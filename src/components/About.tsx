const facts = [
  "Преподаёт английский детям от 2 лет и взрослым",
  "Обучает и поддерживает методически других преподавателей",
  "Разрабатывает программы и учебные материалы",
  "Организует языковые лагеря, квесты, праздники и мастер-классы",
  "Работает с родителями и педагогами",
];

const stats = [
  ["6+", "лет в детском образовании"],
  ["2–15", "лет — возраст детей"],
  ["до 6", "человек в группе"],
  ["очно + онлайн", "Всеволожск и весь мир"],
];

export default function About() {
  return (
    <section id="about" className="about1">
      <h2>Знакомьтесь, это мы</h2>
      <p className="sub">
        Клуб ИЗИКИ основала Мери — преподаватель английского языка с опытом
        более 6 лет. Мы любим детей, игры и всё, что делает день ярче.
      </p>

      <div className="stats">
        {stats.map(([big, small]) => (
          <div className="st" key={big}>
            <b>{big}</b>
            <span>{small}</span>
          </div>
        ))}
      </div>

      <ul className="facts">
        {facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="links">
        <a
          className="btn"
          href="https://max.ru"
          target="_blank"
          rel="noreferrer"
        >
          Написать в MAX
        </a>
        <a
          className="btn g"
          href="https://t.me/izikids"
          target="_blank"
          rel="noreferrer"
        >
          Написать в Telegram
        </a>
      </div>
    </section>
  );
}
