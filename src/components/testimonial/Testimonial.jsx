import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: ` From the moment you meet Tuhin, you know he is there to do a great job. He has had to deal with an enormous amount of stressful situations while juggling so many responsibilities that were thrown at him as he was growing within Tata Consultancy Services and yet, he was still there helping us whenever we were in tight spots with our deadlines. Tuhin exudes confidence because he gives a 110% of himself to achieve his goals, no matter how far out of reach they may seem. Team player, go-getter, not to forget his strong Java web development abilities, that's Tuhin in a nutshell.`,
      reviewerName: "Nancy Byers",
      designation: "CEO at ib-themes",
    },
    {
      imageName: "team-2",
      desc: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Jara Afsari",
      designation: "CEO at ib-themes",
    },
    {
      imageName: "team-4",
      desc: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.`,
      reviewerName: "Janiaya kiaram",
      designation: "Visual Designer",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
