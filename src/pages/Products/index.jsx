import Header from "../../components/Header";
import Pillars from "components/Pillars";
import Royalty from "components/Royalty/royalty";
import royaltyImg from "assets/img/dummy/royalty.svg";
import Footer from "components/Footer";

const Products = () => {
  return (
    <>
      <Header />
      <Royalty img={royaltyImg} title="Gojek Loyalty" desc="Make more transactions, get more rewards!" txtbtn="View more" />
      <Footer />
    </>
  );
};

export default Products;
