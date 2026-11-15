const base = import.meta.env.BASE_URL;

const Hero = () => (
  <section className="hero" id="top">
    <div className="blob b1" />
    <div className="blob b2" />
    <div className="blob b3" />
    <div className="blob b4" />

    <div className="hero-content">
      <div className="hph hph--logo">
        <img src={`${base}logo.png`} alt="ИЗИКИ — детский клуб" />
      </div>

      <div className="badge">Новый клуб во Всеволожске</div>

      <h1>
        Здесь детям <span>изи!</span>
      </h1>

      <p>
        Английский для детей от 2 лет, логопед и подготовка к школе. Учим играя
        — без перевода, без учебников и скучной зубрежки.
      </p>

      <div className="tags">
        <span>📍 Всеволожск</span>
        <span>💻 Онлайн по всему миру</span>
        <span>👥 Группы до 6 человек</span>
      </div>

      <a href="#join" className="btn">
        Записаться на пробное
      </a>
    </div>
  </section>
);

export default Hero;
