// img item swip 2
import goride from "assets/img/dummy/goride.svg";
import gocar from "assets/img/dummy/gocar.svg";
import gosend from "assets/img/dummy/gosend.svg";
import gobox from "assets/img/dummy/gobox.svg";

import Footer from "components/Footer";
import Header from "components/Header";
import Join from "components/Join";
import Swiper from "components/Swiper";

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
      <Swiper {...data} />
      <Join />
      <Footer />
    </>
  );
};

export default Careers;
