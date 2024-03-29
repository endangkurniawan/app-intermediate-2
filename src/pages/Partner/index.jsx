import Footer from "components/Footer";
import Header from "components/Header";
import Join from "components/Join";
import Swiper from "components/Swiper";

const Partner = () => {
  const data = {
    title: "What drives you ?",
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
      <Swiper {...data} />
      <Join />
      <Footer />
    </>
  );
};

export default Partner;
