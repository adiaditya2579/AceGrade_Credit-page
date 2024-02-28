import React,{ useState, useEffect } from 'react'
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Cards() { 

  const [slidesToShow, setslidesToShow] =  useState(1)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 675) { 
        setslidesToShow(1);
      }else if (window.innerWidth < 1000) { 
        setslidesToShow(2);
      } else { 
        setslidesToShow(3);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  
  
  
  
  
  return (
    <div className="bg-[#27272A] h-full">
        <h1 className="sm:py-4 sm:px-0 px-8 py-4 text-white text-2xl font-semibold container mx-auto">Core Devs</h1>
        <div className="border-b-[2px]  border-[rgb(57,57,57)] w-full"></div>
        <div className=" w-[70%]   m-auto slider-container ">
        <Slider {...settings}>
          {coremember.map((member, index) => (
            <Card key={index} item={member} />
          ))}
          </Slider>
 
          </div>


          <div className="border-b-[2px] border-[#393939] w-full mt-12"></div>
          <h1 className="sm:py-4 sm:px-0 px-8 py-4 text-white text-2xl font-semibold container mx-auto  ">Contributors</h1>
          <div className="border-b-[2px] border-[#393939] w-full"></div>
          <div className=" w-[70%] m-auto py-[50px] ">
          <Slider {...settings}>
            {contributors.map((member, index) => (
              <Card key={index} item={member} />
            ))}
            </Slider>
 
          </div>
    </div>
  )
}
const coremember = [
  {
    image:"https://i.ibb.co/XYBYHMH/IMG-20231106-033208.jpg",
    name: "SUMIT SHARMA",
    roll: "Project Lead",
    email:'sumitsharma.iitm@gmail.com',
    linkedin:"https://www.linkedin.com/in/chingaari-sharma/",
    github:'https://github.com/chingaari',
  },
  {
    image:"https://i.ibb.co/zQhFHbC/Shashank-Reddy.jpg",
    name: "SHASANK REDDY",
    roll: "Backend & Deployment",
    linkedin:"https://www.linkedin.com/in/shashank1644/",
    email:'',
    github:' https://github.com/gadilashashank',

  },
  {
    image:" https://i.ibb.co/GCDd6Z6/rohitphoto.jpg",
    name: "ROHIT RAJ",
    roll: "Frontend",
    email:'official.rohitr@gmail.com',
    linkedin:"https://www.linkedin.com/in/rohit-raj-3abb13201/",
    github:'https://github.com/code-rohitr',
  },
  {
    image:"https://i.ibb.co/VHvsTP3/Pratham-Professional-Pic.png",
    name: "PRATHAM BHALLA",
    roll: "Frontend",
    email:'prathambhalla7@gmail.com',
    linkedin:"https://www.linkedin.com/in/pratham-bhalla/",
    github:'https://github.com/pkbhalla',
  },
  
  
];
const contributors = [
  {
    image:"https://i.ibb.co/p45hbw8/PRIYANSHU.jpg",
    name: "Priyanshu Tiwari",
    roll: "WebOps Team",
    email:'priyanshutiwari.k30@gmail.com',
    linkedin:"https://www.linkedin.com/in/realpriyanshutiwari/",
    github:'',
  },
  {
    image:"https://i.ibb.co/zFMB6fc/IMG-20231228-222127.jpg",
    name: "Kaustubh Dwivedi",
    roll: "WebOps Teamgit",
    email:'ram.shivaay100@gmail.com',
    linkedin:"https://www.linkedin.com/in/kaustubh-dwivedi-kd/",
    github:'',
  },
];

export default Cards;