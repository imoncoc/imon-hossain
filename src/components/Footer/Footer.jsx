import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
      <div
        className="footer"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto text-center my-5 ">
              <div className="my-5">
                <h2 className="heading-secondary text-white fw-lighter text-uppercase">
                  Md Imon Hossain
                </h2>
                <p className="text-uppercase text-white">Follow me</p>
              </div>

              <div className="d-flex justify-content-around my-4">
                <Link>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" footer__icon"
                  />
                </Link>
                <Link>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className=" footer__icon"
                  />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faTwitter} className=" footer__icon" />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGithub} className=" footer__icon" />
                </Link>
                <Link>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" footer__icon"
                  />
                </Link>
              </div>

              <div className="my-5">
                <p className="text-white">
                  Copyright ©
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  All rights reserved by{" "}
                  <Link href="" className="footer__link">
                    <span className="">Md Imon Hossain.</span>
                  </Link>{" "}
                  For more information contact me via CV or above social
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;