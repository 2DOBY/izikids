import { advantages } from "../data";

export default function Why() {
  return (
    <section>
      <h2>Преимущества наших занятий</h2>
      <p className="sub">Наведите или коснитесь — карточки оживают.</p>
      <div className="why">
        {advantages.map((a) => (
          <div className="w" key={a.title}>
            <i>{a.emoji}</i>
            {a.title}
            <small>{a.text}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
