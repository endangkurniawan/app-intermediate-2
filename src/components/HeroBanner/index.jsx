const HeroBanner = (props) => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__video-box">
        <video autoPlay muted loop>
          <source src={props.source} type="video/mp4" />
        </video>
      </div>
      <div className="hero-banner__content">
        <h2 className="hero-banner__title">{props.title}</h2>
        {props.desc !== undefined ? <p className="hero-banner__desc ">{props.desc}</p> : null}
      </div>
    </div>
  );
};

export default HeroBanner;
