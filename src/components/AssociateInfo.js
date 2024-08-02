import React from "react";
import InfoCircle from "./InfoCircle";
import { services } from "../data";

const AssociateInfo = () => {
  return (
    <div>
      <div class="info-circle">
        <div class="outer-circle">
          <div class="inner-circle">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0xP38q1ycRvz9OZo3D5NYvZl-tz_pBsFIg&s"
              class="image"
            />
            {/* <i class="fa fa-globe image" aria-hidden="true"></i> */}
          </div>
        </div>

        <div class="info-blocks">
          {services.map((service) => {
            return <InfoCircle {...service} key={service.id} />;
          })}

          {/* <div class="info-block clearfix">
            <div class="info-icon">
              <i class="fa fa-gift"></i>
            </div>
            <div class="info-text">
              <h5 class="title text-upper">Free Domains</h5>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, saepe!
              </p>
            </div>
          </div>

          <div class="info-block clearfix">
            <div class="info-icon">
              <i class="fa fa-gift"></i>
            </div>
            <div class="info-text">
              <h5 class="title text-upper">Free Domains</h5>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, saepe!
              </p>
            </div>
          </div>

          <div class="info-block clearfix">
            <div class="info-icon">
              <i class="fa fa-gift"></i>
            </div>
            <div class="info-text">
              <h5 class="title">Free Domains</h5>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, saepe!
              </p>
            </div>
          </div>

          <div class="info-block clearfix">
            <div class="info-icon">
              <i class="fa fa-gift"></i>
            </div>
            <div class="info-text">
              <h5 class="title">Free Domains</h5>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, saepe!
              </p>
            </div>
          </div>

          <div class="info-block clearfix">
            <div class="info-icon">
              <i class="fa fa-gift"></i>
            </div>
            <div class="info-text title-only">
              <h5 class="title text-upper">Just a title.</h5>
            </div>
          </div>

          <div class="info-block clearfix">
            <div class="info-icon">
              <i class="fa fa-gift"></i>
            </div>
            <div class="info-text title-only">
              <h5 class="title">Yep, no extra text.</h5>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AssociateInfo;
