import React, { Fragment, useState } from "react";

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function TradeEvents({ id, start_date, end_date, title, booth, hall, venue }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="trade-container trade-event">
        <div className="flex-item-left">
          {start_date}
          <br /> to
          <br /> {end_date}
        </div>

        <div className="flex-item-right">
          <ul className="trade-text">
            <li> {title}</li>
            <li>Booth : {booth}</li>
            <li>Hall : {hall}</li>
            <li>Venue : {venue}</li>
            <li>
              {/* <Button variant="outline-dark" onClick={handleShow}>
                View Details
              </Button>{" "}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://jrdiamgroup.com/wp-content/uploads/2022/05/Las-vegas.jpg"
                    width="100%"
                  />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal> */}
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default TradeEvents;
