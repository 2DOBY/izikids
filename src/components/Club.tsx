const base = import.meta.env.BASE_URL;

export default function Club() {
  return (
    <section id="club">
      <h2>Мы открылись во Всеволожске!</h2>
      <p className="sub">
        Новый клуб, та же любовь к английскому. Очно во Всеволожске и онлайн из
        любого города.
      </p>
      <figure className="gal">
        <img
          src={`${base}club.jpg`}
          alt="Дети и дракончик Изики на занятии"
          loading="lazy"
        />
        <figcaption>
          <a href={`${base}flyer.jpg`} target="_blank" rel="noreferrer">
            Открыть листовку
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
