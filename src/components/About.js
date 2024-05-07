// import aboutImg from "../images/about.jpeg";
import { Link } from "react-router-dom";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="" subTitle="about us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="https://i0.wp.com/jrdiamgroup.com/wp-content/uploads/2021/06/Cut.jpg?w=588&ssl=1"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          {/* <h3>explore the difference</h3> */}
          <p className="about-p">
            J.R Diam Group has a legacy in the world of diamonds that dates back
            to over two and a half decades. Founded by Late Shri Jivanbhai
            Sanspara, the principles of the group were laid on the values of
            prioritizing purity, quality and excellence.
          </p>
          <h3 className="about-quote">
            "Customer Trust and Satisfaction <br />
            is our Biggest Asset"
          </h3>
          <Link to="/about" className="btn btn-about">
            know more
          </Link>
        </article>
      </div>
    </section>
  );
};
export default About;
