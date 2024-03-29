const Pillars = ({ data }) => {
  return (
    <div className="pillars">
      <div className="container">
        <div className="pillars__wrp">
          <h2 className="pillars__title">The three pillars of Gojek</h2>
          <div className="pillars__list">
            {data.map((val, idx) => (
              <div className="pillars__item" key={`dp-${idx}`}>
                <div className="pillars__box" style={val.style}>
                  <div className="pillars__box__txt">
                    <h4 className="pillars__box__title">{val.titleBox}</h4>
                    <p className="pillars__box__desc">{val.desc}</p>
                  </div>
                  <div className="pillars__img">
                    <img className="pillars__img__el" src={val.Img} alt={val.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
