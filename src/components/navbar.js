import logo from "../assets/images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://jrdiamgroup.com/wp-content/uploads/2023/05/JR.png"
            className="nav-logo"
            alt="JRD"
          />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
