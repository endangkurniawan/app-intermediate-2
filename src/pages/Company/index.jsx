// img pillars
import speed from "assets/img/dummy/sped.svg";
import innovation from "assets/img/dummy/innovation.svg";
import social from "assets/img/dummy/social.svg";

import Header from "../../components/Header";
import Pillars from "components/Pillars";
import Royalty from "components/Royalty/royalty";
import royaltyImg from "assets/img/dummy/royalty.svg";
import Footer from "components/Footer";

const Company = () => {
  const items = [
    {
      titleBox: "Speed",
      desc: "Move fast, push boundaries.",
      Img: speed,
      title: "Title for Image 1",
      style: { backgroundColor: "#7ccc6c" },
    },
    {
      titleBox: "Innovation",
      desc: "Solve problems at scale.",
      Img: innovation,
      title: "Title for Image 2",
      style: { backgroundColor: "#FF808B" },
    },
    {
      titleBox: "Social Impact",
      desc: "Transform lives, inspire change.",
      Img: social,
      title: "Title for Image 3",
      style: { backgroundColor: "#FFAE62" },
    },
  ];

  return (
    <>
      <Header />
      <Pillars data={items} />
      <Royalty img={royaltyImg} title="Gojek Loyalty" desc="Make more transactions, get more rewards!" txtbtn="View more" />
      <Footer />
    </>
  );
};

export default Company;
