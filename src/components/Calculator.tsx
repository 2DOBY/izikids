import { useMemo, useState } from "react";
import type { FC } from "react";

type Props = { onCta: () => void };

const PER_DAY = 900; // ₽ за день посещения — настройте под себя

const Calculator: FC<Props> = ({ onCta }) => {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(3);

  const total = useMemo(() => days * hours * PER_DAY, [days, hours]);
  const fmt = new Intl.NumberFormat("ru-RU").format(total);

  return (
    <section id="price">
      <h2>Сколько это стоит</h2>
      <p className="sub">
        Подвигайте ползунки — посчитаем примерную стоимость в месяц.
      </p>

      <div className="calc">
        <label>
          <span>Дней в неделю</span>
          <span>{days}</span>
        </label>
        <input
          type="range"
          min={1}
          max={5}
          value={days}
          onChange={(e) => setDays(+e.target.value)}
        />

        <label>
          <span>Часов в день</span>
          <span>{hours}</span>
        </label>
        <input
          type="range"
          min={1}
          max={8}
          value={hours}
          onChange={(e) => setHours(+e.target.value)}
        />

        <div className="total">
          {fmt} ₽<small>Ориентировочная цена, точную назовём при записи</small>
        </div>

        <button className="btn" onClick={onCta}>
          Хочу такой тариф
        </button>
      </div>
    </section>
  );
};

export default Calculator;
