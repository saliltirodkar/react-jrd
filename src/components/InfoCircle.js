import React from "react";

const InfoCircle = ({ icon, image, title, text, email }) => {
  return (
    <div>
      <div class="info-block clearfix">
        <div class="info-icon">
          {/* <i className={icon}></i> */}
          <img src={image} alt={title} width="30" />
        </div>
        <div class="info-text">
          <h5 class="title text-upper">{title}</h5>
          <p class="text">
            {text}
            <h5>{email}</h5>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCircle;
