import { trades } from "../data";

import TradeEvents from "../components/TradeEvents";
import Title from "../components/Title";

import TradeEvent1 from "../components/TradeEvent1";
import TradeEvent2 from "../components/TradeEvent2";

const Events = () => {
  return (
    <section className="section events" id="services">
      <Title title="our trade" subTitle="shows 1" />

      <div className="section-center services-center">
        {trades.map((tradeShows) => {
          return <TradeEvents {...tradeShows} key={tradeShows.id} />;
        })}
      </div>
      <Title title="our trade" subTitle="shows 2" />
      <div className="section-center services-center">
        {trades.map((tradeShows) => {
          return <TradeEvent1 {...tradeShows} key={tradeShows.id} />;
        })}
      </div>
      <Title title="our trade" subTitle="shows 3" />
      <div className="section-center services-center">
        {trades.map((tradeShows) => {
          return <TradeEvent2 {...tradeShows} key={tradeShows.id} />;
        })}
      </div>
    </section>
  );
};
export default Events;
