import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-3/4 transform -translate-y-1/2 right-10 md:right-16 lg:right-24 cursor-pointer z-10"
      onClick={onClick}
    >
      <span>
        <img className="w-8 h-8 " src="images/arrow2.png" alt="Next" />
      </span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-3/4 transform -translate-y-1/2 left-10 md:left-16 lg:left-24 cursor-pointer z-10"
      onClick={onClick}
    >
      <span>
        <img className="w-8 h-8" src="images/arrow1.png" alt="Previous" />
      </span>
    </div>
  );
};

const Carosal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imageClasses = [".i1", ".i3", ".i5", ".i6", ".i2", ".i7", ".i4", ".i8"];
  
    useEffect(() => {
      const index = currentSlide % imageClasses.length;
      const elements = document.querySelectorAll(".animate");
  
      elements.forEach((element) => {
        element.classList.remove("animate");
      });
  
      const currentElement = document.querySelector(imageClasses[index]);
      if (currentElement) currentElement.classList.add("animate");
    }, [currentSlide, imageClasses]);
  
    const handleSlideChange = (newIndex) => {
      setCurrentSlide(newIndex);
    };
  
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => handleSlideChange(next),
    };
  
    const slides = [
      { image: "images/card7.png" },
      { image: "images/card4.png" },
      { image: "images/card5.png" },
      { image: "images/card3.png" },
      { image: "images/card2.png" },
      { image: "images/card6.png" },
      { image: "images/card8.png" },
      { image: "images/card1.png" },
    ];
  
    return (
      <div className="relative px-4 sm:px-12">
        <p className="text-lg sm:text-2xl font-semibold mt-6 sm:mt-12">Testimonials</p>
        
        {/* Decorative Images */}
        <div className="hidden md:block absolute top-32 left-1/3 sm:left-98 sm:top-80">
          <img src="images/rect2.png" className="w-10 sm:w-20" alt="decorative" style={{ width: "72px", height: "115px" }} />
        </div>
        <div className="hidden md:block absolute top-32" style={{ left: "61%" }}>
          <img src="images/rect.png" className="w-10 sm:w-20" alt="decorative" style={{ width: "68px", height: "115px" }} />
        </div>
  
        {/* Slider */}
        <div className="mx-auto mt-12 sm:mt-24 w-full max-w-lg">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="p-2 sm:p-4">
                <img src={slide.image} alt={`Slide ${index}`} className="w-full animate" />
              </div>
            ))}
          </Slider>
        </div>
  
        {/* Animated Decorative Images */}
        <img src="images/l2.svg" className="i1 animate hidden md:block absolute top-64 left-4 sm:left-18 w-6 sm:w-12" alt="decorative" />
        <img src="images/r1.svg" className="i7 animate hidden md:block absolute top-40 right-4 sm:right-56 w-6 sm:w-12" alt="decorative" />
        <img src="images/r3.svg" className="i2 animate hidden md:block absolute top-80 right-4 sm:right-64 w-6 sm:w-12" alt="decorative" />
        <img src="images/l3.svg" className="i3 animate hidden md:block absolute top-40 left-12 sm:left-36 w-6 sm:w-12" alt="decorative" />
        <img src="images/r2.svg" className="i4 animate hidden md:block absolute top-64 right-12 sm:right-56 w-6 sm:w-12" alt="decorative" />
        <img src="images/l5.svg" className="i5 animate hidden md:block absolute top-96 left-12 sm:left-36 w-6 sm:w-12" alt="decorative" />
        <img src="images/l4.svg" className="i6 animate hidden md:block absolute top-72 left-20 sm:left-44 w-6 sm:w-12" alt="decorative" />
        <img src="images/l1.svg" className="i8 animate hidden md:block absolute top-40 left-32 sm:left-64 w-6 sm:w-12" alt="decorative" />
      </div>
    );
  };
  
  export default Carosal;
  