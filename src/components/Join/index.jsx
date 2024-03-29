import joinA from "../../assets/img/card/card1.svg";
import joinB from "../../assets/img/card/card2.svg";
import joinC from "../../assets/img/card/card3.svg";

const dataJOin = [
  {
    to: "#",
    img: joinA,
    title: "Employess",
    desc: "Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
    txtbtn: "Join as employe",
  },
  {
    to: "#",
    img: joinB,
    title: "Driver partners",
    desc: "We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
    txtbtn: "Join as a driver partner",
  },
  {
    to: "#",
    img: joinC,
    title: "Merchants",
    desc: "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
    txtbtn: "Join as a merchant",
  },
];

const Join = () => {
  return (
    <div className="join">
      <div className="container">
        <h2 className="join__title">Join the ride</h2>
        <div className="join__list">
          {dataJOin.map((val, idx) => (
            <div className="join__item" key={`dj-${idx}`}>
              <div className="join__box">
                <div className="join__img">
                  <img src={val.img} alt={val.title} className="join__img__el" />
                </div>
                <div className="join__txt">
                  <h3 className="join__txt__title">{val.title}</h3>
                  <p className="join__txt__desc">{val.desc}</p>
                </div>
                <a href={val.to} className="btn">
                  {val.txtbtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
