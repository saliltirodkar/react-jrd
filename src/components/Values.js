// import aboutImg from "../images/about.jpeg";
import Title from "./Title";
import Value from "./Value";
// import { values } from "./../data";

const Values = () => {
  return (
    <section className="section values-banner" id="values">
      <Title title="our" subTitle="values" />

      {/*<div className="section-center about-center">
         <article className="about-info">
          {/* <h3>explore the difference</h3> */}
      {/* <ul>
            <li>
              We emphasize on providing high-quality jewelry that is crafted
              with precision and attention to detail.
            </li>
            <li>Promise authenticity in every piece,</li>
            <li>
              Commit to providing personalized assistance to customers, whether
              they need help selecting the perfect piece, sizing advice, or
              customization options.
            </li>
            <li>
              Pledge timely delivery of orders with reliable shipping partners,
            </li>
            <li>
              Promise ongoing support post-purchase, assisting customers with
              any concerns
            </li>
          </ul>
        </article>
        <div className="about-img">
          <img
            src="https://i0.wp.com/jrdiamgroup.com/wp-content/uploads/2021/06/Cut.jpg?w=588&ssl=1"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
      </div>*/}
      <div>
        {/* {values.map((values) => {
          return <Value {...values} key={values.id} />;
        })} */}
        <Value
          icon="far fa-gem figcaption"
          description="We emphasize on providing high-quality jewelry that is crafted with precision and attention to detail."
        />
        <Value
          icon="fas fa-check-circle figcaption"
          description="Promise authenticity in every piece"
        />
        <Value
          icon="far fa-gem figcaption"
          description="We emphasize on providing high-quality jewelry that is crafted with precision and attention to detail."
        />
      </div>
      <div>
        <Value
          icon="fas fa-shipping-fast figcaption"
          description="Pledge timely delivery of orders with reliable shipping partners"
        />
        <Value
          icon="fas fa-hands-helping figcaption"
          description="Commit to providing personalized assistance to customers, whether they need help selecting the perfect piece, sizing advice, or customization options."
        />
        <Value
          icon="fas fa-user-friends figcaption"
          description="Promise ongoing support post-purchase, assisting customers with any concerns"
        />
      </div>
    </section>
  );
};
export default Values;
