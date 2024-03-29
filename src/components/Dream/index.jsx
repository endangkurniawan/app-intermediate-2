// Link
import { Link } from "react-router-dom";

// img
import weScale from "assets/img/dummy/we-scale.png";
import weScale2 from "assets/img/dummy/we-scale-2.png";
import weScale3 from "assets/img/dummy/we-scale-3.png";
import weScale4 from "assets/img/dummy/we-scale-4.png";

const dataDream = [
  {
    img: weScale,
    title: "190 million+",
    desc: "app downloads since 2015",
    style: { backgroundColor: "#7ccc6c" },
  },
  {
    img: weScale2,
    title: "2 million+",
    desc: "driver partners",
    style: { backgroundColor: "#D48BC8" },
  },
  {
    img: weScale3,
    title: "900,000+",
    desc: "GoFood merchants",
    style: { backgroundColor: "#FFAE62" },
  },
  {
    img: weScale4,
    title: "2.448x",
    desc: "jump in downloads from 2015 to 2020",
    style: { backgroundColor: "#4AC9E3" },
  },
];

const Dream = () => {
  return (
    <div className="dream">
      <div className="container">
        <div className="dream__wrap">
          <div className="dream__top">
            <h3 className="dream__top__title">We scale like a dream</h3>
            <Link className="btn">Scale with us</Link>
          </div>
          <div className="dream__list">
            {dataDream.map((val, idx) => (
              <div className="dream__item" key={`dd-${idx}`}>
                <div className="dream__box" style={val.style}>
                  <div className="dream__img">
                    <img src={val.img} alt={val.title} className="dream__img__el" />
                  </div>
                  <div className="dream__txt">
                    <h4 className="dream__txt__title">{val.title}</h4>
                    <p className="dream__txt__desc">{val.desc}</p>
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

export default Dream;
