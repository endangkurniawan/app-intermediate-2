import Header from "components/Header";
import HeroBanner from "components/HeroBanner";
import Dream from "components/Dream";
import Join from "components/Join";
import Royalty from "components/Royalty/royalty";
import royaltyImg from "assets/img/dummy/royalty.svg";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner video="https://www.youtube.com/embed/VJH5FJ5kaJA?enablejsapi=1&version=3&controls=0&rel=0&autoplay=1&loop=1&mute=1&playlist=VJH5FJ5kaJA&playsinline=1" title="3 negara. 20+ layanan. 1 platform on-demand terkemuka." />
      <Dream />
      <Royalty img={royaltyImg} title="Gojek Loyalty" desc="Make more transactions, get more rewards!" txtbtn="View more" />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
