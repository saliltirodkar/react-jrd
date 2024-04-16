import React, { Fragment, useState } from "react";

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function TradeEvent1({
  id,
  start_date,
  date,
  end_date,
  title,
  booth,
  hall,
  venue,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div class="carddum" data-label={date}>
        <div class="carddum__container">
          <h2 class="carddum__header">{title}</h2>
          <ul className="trade-text">
            <li>Booth : {booth}</li>
            <li>Hall : {hall}</li>
            <li>Venue : {venue}</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default TradeEvent1;
