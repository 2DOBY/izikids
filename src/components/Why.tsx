import { advantages } from "../data";

export default function Why() {
  return (
    <section>
      <h2>Как мы учим</h2>
      <p className="sub">
        Английский без перевода: говорим, играем и пробуем — как в жизни.
      </p>
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
