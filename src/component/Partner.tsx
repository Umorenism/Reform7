import { motion } from "framer-motion";
import logo from "../../public/hand-1106926_640.png";

export const Partner = () => {
  return (
    <div className="mt-20 bg-pat min-h-full w-full p-4">
      <div className="max-w-[80%] p-4 min-h-[400px] m-auto text-center mt-4">
        <h1 className="text-4xl font-bold text-black">Partner + Give</h1>
        <div className="flex gap-10 flex-col items-center justify-center md:flex-row">
          <div className="w-1/2 flex justify-center items-center flex-col text-start">
            <h1 className="md:text-2xl text-md w-full ">
              Thank you for your desire to support what God is doing through us
              to bring reformation to Africa. We appreciate you and ask God to
              reward you immensely. Please note that your donations to REFORM7
              is not tax-deductible at this time.
            </h1>
            <button className="px-10 items-start py-2 mt-4 font-bold border border-yellow-950 transition-transform transform hover:scale-105 hover:bg-yellow-200 rounded-lg">
              GIVE
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center w-full items-center">
            <motion.img
              src={logo}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
