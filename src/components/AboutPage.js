import React, { Fragment } from "react";

import AboutImage from "../assets/images/about-us-imagep.png";
import AboutImage2 from "../assets/images/brio-small.jpg";
import Title from "./Title";

function AboutPage() {
  return (
    <Fragment>
      <Title title="" subTitle="About us" />
      <div className="about-section">
        <div class="aboutpage-container">
          <div class="about-item-left">
            <div>
              <p>
                J.R Diam Group has a legacy in the world of diamonds that dates
                back to over two and a half decades. Founded by Late Shri
                Jivanbhai Sanspara, the principles of the group were laid on the
                values of prioritizing purity, quality and excellence. Two and a
                half decades later, J.R Diam Group has stood the test of time
                and emerged as one of the largest manufacturers of diamond and
                the biggest worldwide supplier of beads, briolettes, SS cut,
                rose cut and old mine cut diamonds.
              </p>

              <p>
                At J.R Diam Group, we’re not just the biggest brand in the world
                of diamond wholesale, but we also ensure precision and quality
                at every stage of the manufacturing process so our valued
                customers can get their hands on the best, world-class, and
                high-end diamond jewellery they can cherish for life.
              </p>

              <p>
                Our team of brilliant designers and skilled diamond workforce
                makes certain that our customers wear only the most unique and
                handcrafted piece always.
              </p>
            </div>

            <h3>Why Trust Us?</h3>
            <p>
              Consistency is the key and Quality is of prime importance to us at
              J.R Diam Group. Right from sourcing only the finest raw materials
              to turning them into masterpieces and presenting them to you, our
              valued customers, we keep an eye on every step of the way.
            </p>

            <p>
              Our materials are sourced from Israel & Belgium brings the much
              needed oomph that you’re looking for in your jewellery. Because we
              at J.R Diam Group care about what you wear!
            </p>
          </div>
          <div class="about-item-right">
            {/* <img src={AboutImage} alt="About JR Diam Group" /> */}
            {/* <img
              src="https://i0.wp.com/jrdiamgroup.com/wp-content/uploads/2021/06/Cut.jpg?w=588&ssl=1"
              className="about-photo"
              alt="awesome beach"
            /> */}

            <div class="image-column">
              <div class="inner-column">
                <figure class="image-1">
                  <img src={AboutImage} alt="awesome beach" />
                </figure>
                <figure class="image-2">
                  <img src={AboutImage2} alt="awesome beach" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="JRTestimonial">
          <p className="JRtag">
            "Customer Trust And Satisfaction is our Biggest Asset"
          </p>
          <p className="JRsay"> ~ J. R . Group</p>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutPage;
