// Logo footer
import gojekLogo from "assets/img/logo/gojek.svg";

// Link
import { Link } from "react-router-dom";

// Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutubeSquare, FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrap">
          <Link className="footer__logo" to="#">
            <img src={gojekLogo} alt="logo footer" className="footer__logo__el" />
          </Link>
          <div className="footer__menu">
            <div className="footer__menu__wrapper">
              <h4 className="footer__menu__title">Company</h4>
              <ul className="footer__nav">
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Abouts
                  </Link>
                </li>
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Products
                  </Link>
                </li>
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu__wrapper">
              <h4 className="footer__menu__title">Join with us</h4>
              <ul className="footer__nav">
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Driver Partners
                  </Link>
                </li>
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Merchant Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu__wrapper">
              <h4 className="footer__menu__title">Careers</h4>
              <ul className="footer__nav">
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Student
                  </Link>
                </li>
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Professional
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__menu__wrapper">
              <h4 className="footer__menu__title">Get in touch</h4>
              <ul className="footer__nav">
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Help Center
                  </Link>
                </li>
                <li className="footer__nav__item">
                  <Link href="#" className="footer__nav__link">
                    Our Location
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__sosmed">
              <h4 className="footer__sosmed__title">Connect with Us</h4>
              <div className="footer__sosmed__grid">
                <Link className="footer__sosmed__link">
                  <FaFacebookF className="footer__sosmed__item" />
                </Link>
                <Link className="footer__sosmed__link">
                  <FaTwitter className="footer__sosmed__item" />
                </Link>
                <Link className="footer__sosmed__link">
                  <FaInstagram className="footer__sosmed__item" />
                </Link>
                <Link className="footer__sosmed__link">
                  <FaYoutubeSquare className="footer__sosmed__item" />
                </Link>
              </div>
              <h4 className="footer__sosmed__title">Download the app</h4>
              <div className="footer__sosmed__grid">
                <Link to="#" className="footer__sosmed__link">
                  <IoLogoGooglePlaystore className="footer__sosmed__item" />
                </Link>
                <Link to="#" className="footer__sosmed__link">
                  <FaApple className="footer__sosmed__item" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__copy__right">
            <p className="footer__copy__right__el">&copy; 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedi Tbk. Registered in the Directorate General of intellectual Property of the Republic of Indonesia </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
