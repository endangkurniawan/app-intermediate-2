// img
import royaltyImg from "assets/img/dummy/royalty.svg";
import heroBanner4 from "assets/img/dummy/hero-banner-4.png";

import Header from "../../components/Header";
import HeroBanner from "components/HeroBanner";
import Royalty from "components/Royalty/royalty";
import Footer from "components/Footer";

const Products = () => {
  return (
    <>
      <Header />
      <HeroBanner img={heroBanner4} title="We build products that nations run on" />
      <Royalty img={royaltyImg} title="Gojek Loyalty" desc="Make more transactions, get more rewards!" txtbtn="View more" />
      <Footer />
    </>
  );
};

export default Products;
