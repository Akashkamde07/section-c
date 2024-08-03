import React from "react";
import img1 from "./images/Frame 1000015445 (1).png";
import img2 from "./images/Frame 1000015445.png";
import img3 from "./images/Frame 1000015446.png";
import img4 from "./images/Frame 1000015447.png";
import img5 from "./images/Frame 1000015448.png";
import img6 from "./images/Frame 1000015449.png";

const mentors = [
  {
    name: 'Kiran',
    role: 'Front end developer',
    students: '200+ students trained',
    img: img1,
  },
  {
    name: 'John',
    role: 'Back end developer',
    students: '150+ students trained',
    img: img2,
  },
  {
    name: 'Jane',
    role: 'Full stack developer',
    students: '300+ students trained',
    img: img3,
  },
  {
    name: 'Preeti',
    role: 'Front end developer',
    students: '200+ students trained',
    img: img4,
  },
  {
    name: 'Raj',
    role: 'Front end developer',
    students: '200+ students trained',
    img: img5,
  },
  {
    name: 'Mira',
    role: 'Front end developer',
    students: '200+ students trained',
    img: img6,
  },
];

const Navbar = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row  overflow-hidden p-4 md:p-10">
      <div className="flex-1 px-4 md:px-8 mt-10 md:mt-20" style={{marginLeft: "5%", marginTop: "10%"}}>
        <h2 className="text-xl md:text-3xl font-bold">Meet with our professional mentors</h2>
        <p className="mt-4 text-xs md:text-base">
          Learn from the Best: Top Professionals <br /> and Industry Experts!
          Get certified by top <br /> professionals and experts
        </p>
      </div>

      <div className="relative flex-1 flex justify-center items-center px-4 md:px-8 mt-6 md:mt-0">
        <div className="relative w-full flex justify-center items-center overflow-hidden">
          <div className="relative h-[280px] md:h-[380px] w-full flex justify-center items-center overflow-hidden">
            <div className="slider-track flex flex-col h-[calc(280px*6)] animate-scroll-vertical space-y-4 items-center">
              {mentors.concat(mentors).map((mentor, index) => (
                <img key={index} src={mentor.img} className="w-[250px] md:w-[290px] h-[250px] md:h-[280px] shadow-lg object-cover rounded-t-lg" alt={mentor.name} />
              ))}
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ background: 'linear-gradient(180deg, rgb(236, 236, 236) 20%, rgba(146, 143, 143, 0) 90%)', height: "54px", width: "591px" }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ background: 'linear-gradient(360deg, rgba(236, 236, 236, 0) 0%, rgba(236, 236, 236, 1) 80%)', height: "44px", width: "591px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;