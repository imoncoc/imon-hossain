import React from 'react';
import './Home.css'
import Lottie from "lottie-react";
import developerWorking from "../../assets//132977-developer-working.json";
import happyDeveloper from '../../assets/60676-happy-developer.json'
import Swal from 'sweetalert2';

const Home = () => {

  const handleSweetAlert = () =>{
    Swal.fire("Coming Soon!", "Website is under construction!", "info");
  }

    return (
      <div className="container-fluid" id="home">
        <div className="row">
          <div
            className="col-10 mx-auto col-md-6 align-self-center text-center main-title my-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="title-text mt-5">Hey</h2>
            <h1 className="text-uppercase">I am Imon</h1>
            <p className="">Front-End Developer</p>
            <button
              type="button"
              className=" button green-button mb-5 text-uppercase"
              onClick={handleSweetAlert}
            >
              Explore
            </button>
          </div>

          <div
            className="col-10 col-md-6 mx-auto my-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Lottie
              className="img-fluid w-75 mx-auto"
              animationData={developerWorking}
              loop={true}
            />
          </div>

          <div
            className="col-10 col-md-6 mx-auto"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <Lottie
              className="img-fluid w-75 mx-auto"
              animationData={happyDeveloper}
              loop={true}
            />
          </div>

          <div
            className="col-10 col-md-6 mx-auto align-self-center about-text-div"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <h4 className="fs-2 text-uppercase my-4">
              Let me introduce myself
            </h4>
            <p className="about-text">The great pleasure introduce my self.</p>
            <p className="about-text mb-3 mt-3">
              I am Md Imon Hossain. My interests are in Front End Engineering,
              and I love to create beautiful and performant products with
              delightful user experiences.
            </p>
            <p className="about-text mb-5 mt-2">
              I love to problem solving. I usually solve problem on Codeforces
              and Leetcode.
            </p>
            <button
              type="button"
              src=""
              target="_blank"
              className="animated-bottom btn mb-5 button green-button text-uppercase"
              onClick={handleSweetAlert}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    );
};

export default Home;