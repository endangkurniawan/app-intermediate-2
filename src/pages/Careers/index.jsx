// img item swip 2
import goride from "assets/img/dummy/goride.svg";
import gocar from "assets/img/dummy/gocar.svg";
import gosend from "assets/img/dummy/gosend.svg";
import gobox from "assets/img/dummy/gobox.svg";

// img banner
import imgBanner2 from "assets/img/dummy/hero-banner-2.png";

import Header from "components/Header";
import HeroBanner from "components/HeroBanner";
import Swiper from "components/Swiper";
import Join from "components/Join";
import Footer from "components/Footer";

const Careers = () => {
  const data = {
    title: "What drives you ?",
    items: [
      {
        itemImg: goride,
        desc: " Ride your customers on safe and steady two-wheelers.",
        link: "#",
        btnText: "Know more",
      },
      {
        itemImg: gocar,
        desc: "Drive the four-wheeler for comfortable trips.",
        link: "#",
        btnText: "Know more",
      },
      {
        itemImg: gosend,
        desc: "Deliver packages safely and quickly.",
        link: "#",
        btnText: "Know more",
      },
      {
        itemImg: gobox,
        desc: "Help customers move heavy items.",
        link: "#",
        btnText: "Know more",
      },
    ],
  };
  return (
    <>
      <Header />
      <HeroBanner img={imgBanner2} title="Be a trusted guardian who is ready to help solve problems" desc="Millions of Driver Partners have joined Gojek and increased their income, now it's your turn!" />
      <Swiper {...data} />
      <Join />
      <Footer />
    </>
  );
};

export default Careers;
