import { useState } from "react";
import { directions } from "../data";

const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

export default function Directions() {
  const [activeId, setActiveId] = useState(directions[0].id);
  const active = directions.find((d) => d.id === activeId)!;

  return (
    <section id="age">
      <h2>Направления</h2>
      <p className="sub">Нажмите на направление — расскажем, что внутри.</p>

      <div className="chips">
        {directions.map((d) => (
          <button
            key={d.id}
            className="chip"
            aria-pressed={activeId === d.id}
            onClick={() => setActiveId(d.id)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className={`prog prog--${active.color}`}>
        <div className="em">{active.emoji}</div>
        <div>
          <h3>{active.title}</h3>
          <ul>
            {active.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="pr">
            {active.price ? `от ${fmt(active.price)} ₽` : "Цена при записи"}
          </div>
        </div>
      </div>
    </section>
  );
}
