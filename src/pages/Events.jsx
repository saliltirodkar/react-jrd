import { trades } from "../data";

import Title from "../components/Title";

import TradeEvents from "../components/TradeEvents";
import TradeEvent1 from "../components/TradeEvent1";

const Events = () => {
  return (
    <section className="section events" id="services">
      <Title title="" subTitle="our trade shows" />
      <div className="trade-section-center">
        {trades.map((tradeShows) => {
          return <TradeEvents {...tradeShows} key={tradeShows.id} />;
        })}
      </div>
      <Title title="" subTitle="our trade shows" />
      <div className="section-center featured-center-event">
        {trades.map((tour) => {
          return <TradeEvent1 {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Events;
