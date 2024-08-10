import { FaArrowDown } from "react-icons/fa6";
import vid from "../video/reformvideo.mp4";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0  md:w-full h-full object-cover z-0"
        src={vid}
        autoPlay
        loop
        muted
      />
      {/* Content */}
      <div className="relative z-20 text-center text-white p-4">
        <FaArrowDown className="text-4xl animate-bounce" />
      </div>
    </section>
  );
};
