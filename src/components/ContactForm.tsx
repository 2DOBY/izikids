import { useState } from "react";
import type { FC, FormEvent } from "react";

type Props = { onSuccess: () => void };

const ContactForm: FC<Props> = ({ onSuccess }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: заменить на реальный API-запрос
    setSent(true);
    onSuccess();
    confetti();
  };

  return (
    <section id="join">
      <h2>Напишите, а мы поможем</h2>
      <p className="sub">Оставьте заявку — перезвоним в течение дня.</p>

      <div className="form">
        <div className="info">
          <h3>IZIkids</h3>
          <p>📍 Ваш адрес</p>
          <p>📞 +7 (000) 000-00-00</p>
          <p>🕘 Пн–Пт, 8:00–19:00</p>
          <p>💬 Написать в MAX</p>
          <p>🔗 taplink.cc/izikids</p>
        </div>

        {sent ? (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              background: "var(--pink)",
              padding: 32,
            }}
          >
            <div className="ok" style={{ display: "block" }}>
              Ура! Заявка улетела 🚀
              <br />
              Скоро позвоним
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Имя" required autoComplete="name" />
            <input
              name="phone"
              type="tel"
              placeholder="Телефон"
              required
              autoComplete="tel"
            />
            <select name="direction" defaultValue="">
              <option value="" disabled>
                Направление
              </option>
              <option>Английский</option>
              <option>Логопед</option>
              <option>Подготовка к школе</option>
              <option>Комплекс</option>
            </select>
            <button className="btn b" type="submit">
              Отправить
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

/** Простенькое конфетти без библиотек */
function confetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#f06fa8", "#5aa5e8", "#7ccf6a", "#ffcf4a"];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement("div");
    el.className = "cf";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[i % colors.length];
    el.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

export default ContactForm;
