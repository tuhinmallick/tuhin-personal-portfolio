import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles";

const sliderContent = {
  name: "Tuhin Mallick",
  description: ` My job is to help others make the right decision - data driven decisions. Finding patterns nobody else sees is the challenge to me.`,
  btnText: " Download CV",
  btnText2: "   My     Portfolio   ",
};

const SliderTwo = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/slider/home-banner-3.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles">
          <Particles
            id="tsparticles"
            options={{
              backgroundMode: {
                enable: true,
                zIndex: 1,
              },
              fullScreen: {
                enable: false,
                zIndex: -1,
              },
              fpsLimit: 70,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ddd",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 30,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 6,
                },
              },

              detectRetina: true,
            }}
          />
        </div>
        {/* End particle animation */}
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Data Scientist</p>
                    <p className="loop-text lead">Machine Learning Engineer</p>
                    <p className="loop-text lead">Java Web Developer</p>
                    <p className="loop-text lead">Agile Coach</p>
                  </TextLoop>
                </div>
                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="#work"
                  >
                    {sliderContent.btnText2}
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        {/* End Container*/}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderTwo;
