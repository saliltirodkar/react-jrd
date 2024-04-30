import { trades } from "../data";

import Title from "../components/Title";
import Tour from "../components/Tours";
import { tours } from "../data";

import TradeEvent2 from "../components/TradeEvent2";
import TradeEvent1 from "../components/TradeEvent1";

const Events = () => {
  return (
    <section className="section events" id="services">
      {/* <Title title="" subTitle="our trade shows" />
      <div className="section-center about-center">
        {trades.map((tradeShows) => {
          return <TradeEvent2 {...tradeShows} key={tradeShows.id} />;
        })}
      </div> */}
      <Title title="" subTitle="our trade shows2" />
      <div className="section-center featured-center">
        {trades.map((tour) => {
          return <TradeEvent1 {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Events;
