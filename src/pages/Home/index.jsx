import Header from "components/Header";
// import HeroBanner from "components/HeroBanner";
import Dream from "components/Dream";
import Join from "components/Join";
import Royalty from "components/Royalty/royalty";
import royaltyImg from "assets/img/dummy/royalty.svg";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      {/* <HeroBanner title="3 countries. 20+ products. 1 leading on-demand platform." source="https://youtu.be/VJH5FJ5kaJA?si=3rGZfd0o1nM6_R8M" /> */}
      <Dream />
      <Royalty img={royaltyImg} title="Gojek Loyalty" desc="Make more transactions, get more rewards!" txtbtn="View more" />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
