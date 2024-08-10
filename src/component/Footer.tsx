import {
  FaFacebook,
  FaLinkedinIn,
  FaLocationPin,
  FaTwitter,
} from "react-icons/fa6";
import pic from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#3C3C3E] min-h-[300px] flex justify-center items-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 ">
        <div className=" p-2">
          <div>
            <img src={pic} alt="" className="h-[100px]" />
            <div className="flex gap-4 mt-4">
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaLinkedinIn size={30} />
            </div>
          </div>
        </div>
        <div className=" p-2">
          <div className="text-xl text-white gap-4">
            <h1>USEFUL LINKS</h1>
            <h2>Home</h2>
            <h2>Blog</h2>
            <h2>Project</h2>
            <h2>About us</h2>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="text-white">
          <div>
            <h1>CONTACT</h1>
            <div className="flex items-center text-xl py-2">
              <FaLocationPin />
              <p>P. O. Box 9131 Gaithersburg MD 20898, USA.</p>
            </div>
            <div className="flex items-center text-xl py-2">
              <FaLocationPin />
              <p> Share testimony: testimonies@reform7international.org</p>
            </div>
            <div className="flex items-center text-xl py-2">
              <FaLocationPin />
              <p> For prayers: prayers@reform7international.org</p>
            </div>
            <div className="flex items-center text-xl py-2">
              <FaLocationPin />
              <p> To post articles: info@reform7international.org</p>
            </div>
            <div className="flex items-center text-xl">
              <FaLocationPin />
              <p> For inquiry: info@reform7international.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
