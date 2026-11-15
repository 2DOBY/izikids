import type { FC } from "react";

type Props = { theme: "light" | "dark"; onToggleTheme: () => void };

const base = import.meta.env.BASE_URL;

const Header: FC<Props> = ({ theme, onToggleTheme }) => (
  <header>
    <a href="#top" className="logo" aria-label="ИЗИКИ — на главную">
      <img src={`${base}logo.png`} alt="" width={44} height={44} />
      <span className="wm" aria-hidden="true">
        <i>И</i>
        <i>З</i>
        <i>И</i>
        <i>К</i>
        <i>И</i>
      </span>
    </a>

    <div className="nav-links">
      <a href="#age">Направления</a>
      <a href="#price">Цены</a>
      <a href="#about">О нас</a>
      <a href="#join">Контакты</a>
    </div>

    <div className="nav-actions">
      <a
        className="btn"
        href="#join"
        style={{ padding: "10px 16px", fontSize: "15px" }}
      >
        Записаться
      </a>
      <button
        className="theme"
        onClick={onToggleTheme}
        aria-label={
          theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"
        }
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  </header>
);

export default Header;
