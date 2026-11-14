const Hero = () => (
  <section className="hero" id="top">
    <div className="blob b1" />
    <div className="blob b2" />
    <div className="blob b3" />
    <div className="blob b4" />

    <div className="hero-content">
      <div className="hph">
        {/* Путь начинается со слеша — это значит "ищи в папке public" */}
        <img src={`${import.meta.env.BASE_URL}hero.jpg`} alt="Наша команда с плюшевым другом" />
      </div>

      <h1>
        Здесь детям <span>изи!</span>
      </h1>

      <p>
        Английский, логопед и подготовка к школе в одном месте. Учим играя — без
        учебников и скучной зубрежки.
      </p>

      <a href="#join" className="btn">
        Записаться на пробное
      </a>
    </div>
  </section>
);

export default Hero;
