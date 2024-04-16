import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <section class="contact_us">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="contact_inner">
              <div class="row">
                <div class="col-md-10">
                  <div class="contact_form_inner">
                    <div class="contact_field">
                      <Title title="contact" subTitle="us" />
                      <p>
                        Feel Free to contact us any time. We will get back to
                        you as soon as we can!.
                      </p>
                      <input
                        type="text"
                        class="form-control form-group"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        class="form-control form-group"
                        placeholder="Email"
                      />
                      <textarea
                        class="form-control form-group"
                        placeholder="Message"
                      ></textarea>
                      <button class="btn">Send</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact_info_sec">
                <h4>Contact Info</h4>
                <div class="d-flex info_single align-items-center">
                  <i class="fas fa-headset"></i>
                  <span>+91 8009 054294</span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fas fa-envelope-open-text"></i>
                  <span>info@jrdiamgroup.com</span>
                </div>
                <div class="d-flex info_single align-items-center">
                  <i class="fas fa-map-marked-alt"></i>
                  <span>
                    We have Service city across India, USA, Europe & UAE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
