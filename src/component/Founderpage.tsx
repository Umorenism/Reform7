import { motion } from "framer-motion";
import { TypingEffect } from "./TypingEffect"; // Import using curly braces
import img from "../../public/image1.jpg";

export const Founderpage = () => {
  return (
    <div className="min-h-[500px] bg-pic flex flex-col items-center justify-center text-white p-8 mt-20">
      <div className="flex flex-col items-center text-center max-w-[1500px] p-10 mt-24">
        <motion.h1
          className="md:text-[60px] text-xl mb-10 font-bold py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet the Founder
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="w-full md:w-2/3 h-96"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              alt="founder"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="w-full md:w-[80%] p-6 flex items-center text-2xl justify-center text-white flex-col">
            <TypingEffect
              text="In 2000 when the Holy Spirit told me to become a Microsoft Certified Solution Developer, little did I know that developing practical solutions by the Holy Spirit would mark my journey with God since then. The journey has been lined with Word of Faith, the prophetic, apostolic and intercession founded on strong intimate relationship with God as my Father and best Friend. My success in life is founded on spending time with God, listening to what He has to say about everything and anything, and just saying ‘yes’"
              speed={50}
              cursorColor="black"
            />
            <motion.button
              className="px-6 py-2 mt-4 font-bold border border-yellow-950 transition-transform transform hover:scale-105 hover:bg-yellow-200 rounded-lg"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
