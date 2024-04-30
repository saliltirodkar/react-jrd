import { services } from "../data";
import Title from "./Title";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services-bg" id="services">
      <Title title="" subTitle="our associates" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
