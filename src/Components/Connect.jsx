import React from "react";
import "./Connect.css";
export default function Connect() {
  return (
    <>
      <center>
        <h3 id="con">Contact Me</h3>

        <div className="container3">
          <div className="ver">
            <div className="insta icon fade-in-bottom">
              <a href="https://www.instagram.com/._jenil.p._/ insta">
                <i class="fa-brands  fa-instagram"></i>
              </a>
             Instagram
            </div>
            <div className="whatsapp icon fade-in-bottom">
              <a href="https://www.linkedin.com/in/jenil-parmar-970b4027b/">
                <i class="fa-brands  fa-linkedin"></i>
              </a>
              Linked-in
            </div>
          </div>
          <div className="ver">
            <div className="mail icon fade-in-bottom">
              <a href="mailto:jenilparmar94091@gmail.com">
                {" "}
                <i class="fa-solid  fa-envelope"></i>
              </a>
              Email
            </div>
          </div>
          <div className="ver">
            <div className="linkedin icon fade-in-bottom">
              <a href="https://wa.me/qr/2XBHN2XL2XURF1">
                {" "}
                <i class="fa-brands  fa-whatsapp"></i>
              </a>
             Whatsapp
            </div>
            <div className="discord icon fade-in-bottom ">
              {" "}
              <a href="https://www.instagram.com/._jenil.p._/">
                <i class="fa-brands  fa-discord"></i>
              </a>
              Discord
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
