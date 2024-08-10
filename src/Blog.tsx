import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fashionPic1 from "../public/00c507185eaa94fda08991a952e2b02d7ac85e95.jpeg";
import fashionPic2 from "../public/00c507185eaa94fda08991a952e2b02d7ac85e95.jpeg";
import fashionPic3 from "../public/00c507185eaa94fda08991a952e2b02d7ac85e95.jpeg";

import { Link } from "react-router-dom";

const imageList = [fashionPic1, fashionPic2, fashionPic3];

export const Blog: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-full w-full mt-24 p-4 bg-gradient-to-r from-[#111116] to-[#3C3C3E]">
      <div className="max-w-6xl p-4 min-h-[400px] m-auto">
        <h1 className="text-center mb-4 text-white md:text-4xl py-4">Blog</h1>
        <Slider {...settings}>
          {imageList.map((image, index) => (
            <div key={index} className="p-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full ">
                <img
                  src={image}
                  alt={`Fashion ${index}`}
                  className="w-full  object-cover"
                />
                <div className="p-2">
                  <p className="text-gray-700 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, veniam?
                  </p>
                  <Link to="/">
                    <button className="bg-blue-700 w-full text-white p-2 rounded-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-10">
          <button className="bg-orange-800 px-10 py-2 text-white rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
