import React, { useState } from "react";

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function TradeEvent1({
  id,
  image,
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
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
      </div>
    </article>
  );
}

export default TradeEvent1;
