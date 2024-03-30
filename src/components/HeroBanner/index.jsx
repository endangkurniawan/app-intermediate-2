import React from "react";

const HeroBanner = (props) => {
  const { img, video, title, desc } = props;

  return (
    <div className="banner">
      {img && (
        <div className="banner__background__img">
          <img src={img} alt={title} className="banner__background__img__el" />
        </div>
      )}
      {video && (
        <div className="banner__video-foreground">
          <iframe title="youtube background vidio" src={video} frameBorder="0"></iframe>
        </div>
      )}
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__txt">
            <h1 className="banner__title">{title}</h1>
            {desc !== undefined ? <p className="banner__desc">{desc}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
