import { Link } from "react-router-dom";

const Swiper = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="swiper">
      <div className="container">
        <div className="swiper__top">
          <h2 className="swiper__title">{title}</h2>
        </div>
        <div className="swiper__content">
          <div className="swiper__list">
            {items.map((val, idx) => (
              <div className="swiper__item" key={`ds-${idx}`}>
                <div className="swiper__item__box">
                  {val.itemTitle && <h3 className="swiper__item__title">{val.itemTitle}</h3>}
                  {val.itemImg && (
                    <div className="swiper__item__img">
                      <img src={val.itemImg} alt={val.itemTitle} className="swiper__item__img__el" />
                    </div>
                  )}
                  <p className="swiper__item__desc">{val.desc}</p>
                  <Link to={val.link} className="btn">
                    {val.btnText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
