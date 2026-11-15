import type { FC } from "react";
import { directions } from "../data";

type Props = { onCta: () => void };

const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

const priced = directions.filter((d) => d.price !== null);

const Prices: FC<Props> = ({ onCta }) => (
  <section id="price">
    <h2>Цены</h2>
    <p className="sub">
      Стоимость зависит от возраста и формата занятий. Точную назовём при
      записи.
    </p>

    <div className="prices">
      {priced.map((d) => (
        <div className={`pc pc--${d.color}`} key={d.id}>
          <i>{d.emoji}</i>
          <h3>{d.title}</h3>
          <div className="amount">
            <small>от</small> {fmt(d.price!)} ₽
          </div>
        </div>
      ))}
    </div>

    <p className="center">
      <button className="btn" onClick={onCta}>
        Записаться на пробное
      </button>
    </p>
  </section>
);

export default Prices;
