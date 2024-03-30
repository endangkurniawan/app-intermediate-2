import Header from "components/Header";
import HeroBanner from "components/HeroBanner";
import Join from "components/Join";
import Swiper from "components/Swiper";
import Footer from "components/Footer";

import imgBanner from "assets/img/dummy/hero-banner.png";

const Partner = () => {
  const data = {
    title: "What's your forte?",
    items: [
      {
        itemTitle: "Food delivery",
        desc: "Reach more potential customers and get easy delivery services with GoFood.",
        link: "#",
        btnText: "Register",
      },
      {
        itemTitle: "chasless payment",
        desc: "An easier and faster payment system, without the hassle of preparing for change.",
        link: "#",
        btnText: "Register",
      },
      {
        itemTitle: "Point of sale",
        desc: "Manage sales reports easily with an integrated online system. ",
        link: "#",
        btnText: "Register",
      },
    ],
  };

  return (
    <>
      <Header />
      <HeroBanner img={imgBanner} title="Expand the market and increase turnover without wasting your budget" desc="Reach more customers and get various conveniences by becoming a Gojek Business Partner" />
      <Swiper {...data} />
      <Join />
      <Footer />
    </>
  );
};

export default Partner;
