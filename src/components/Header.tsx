import type { FC } from "react";

type Props = { theme: "light" | "dark"; onToggleTheme: () => void };

const Header: FC<Props> = ({ theme, onToggleTheme }) => (
  <header>
    <a href="#top" className="logo">
      IZI<b>kids</b>
    </a>

    {/* Обернули ссылки в отдельный div */}
    <div className="nav-links">
      <a href="#age">Направления</a>
      <a href="#price">Стоимость</a>
      <a href="#about">О нас</a>
      <a href="#reviews">Отзывы</a>
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
