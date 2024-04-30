import React, { Fragment } from "react";

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function TradeEvent2({
  id,
  start_date,
  date,
  end_date,
  title,
  booth,
  hall,
  venue,
}) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div class="carddums" data-label={date}>
        <img
          src="https://i0.wp.com/jrdiamgroup.com/wp-content/uploads/2021/06/Cut.jpg?w=588&ssl=1"
          alt="Notebook"
        />
        <div class="content">
          <h2>{title}</h2>
          <ul className="">
            <li>Booth : {booth}</li>
            <li>Hall : {hall}</li>
            <li>Venue : {venue}</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default TradeEvent2;
