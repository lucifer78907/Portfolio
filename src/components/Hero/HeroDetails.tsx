const HeroDetails = () => {
  return (
    <span className="hero__details">
      <article className="hero__about">
        <p className="hero__about--title">pronoun</p>
        <p className="hero__about--subtitle">he/him/dev</p>
      </article>
      <div className="hero__line"></div>
      <article className="hero__about">
        <p className="hero__about--title">adjective</p>
        <p className="hero__about--subtitle">innovative/result-driven</p>
      </article>
      <div className="hero__line"></div>
      <article className="hero__about">
        <p className="hero__about--title">adverb</p>
        <p className="hero__about--subtitle">efficient/elegant</p>
      </article>
    </span>
  );
};

export default HeroDetails;
