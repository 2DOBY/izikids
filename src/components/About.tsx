export default function About() {
  return (
    <section id="about" className="about1">
      <h2>Знакомьтесь, это мы</h2>
      <p className="sub">
        Мы любим детей, игры и всё, что делает день ярче. У нас всегда найдётся
        тёплое слово, весёлая затея и плюшевый друг, который готов выслушать.
      </p>
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
